import { AsyncStorage } from 'react-native'

export class Storage {

  private readonly prefix: string

  constructor (prefix: string) {
    this.prefix = prefix
  }

  private getPrefixedKey (key: string): string {
    return this.prefix + key
  }

  async get<T> (key: string): Promise<T | undefined> {
    key = this.getPrefixedKey(key)
    const value = await AsyncStorage.getItem(key)
    if (value) return JSON.parse(value)
    return undefined
  }

  async set (key: string, value: any): Promise<void> {
    key = this.getPrefixedKey(key)
    value = JSON.stringify(value)
    await AsyncStorage.setItem(key, value)
  }

  async remove (key: string): Promise<void> {
    key = this.getPrefixedKey(key)
    await AsyncStorage.removeItem(key)
  }

  async merge (key: string, value: any): Promise<void> {
    key = this.getPrefixedKey(key)
    value = JSON.stringify(value)
    await AsyncStorage.mergeItem(key, value)
  }

  async clear (): Promise<void> {
    let keys = await AsyncStorage.getAllKeys()
    keys = keys.filter(key => key.startsWith(this.prefix))
    await AsyncStorage.multiRemove(keys)
  }

}

export const LocalStorage = new Storage('all')

