import AppStorageManager from './AppStorageManager'
import { v4 as uuidv4 } from 'uuid'

class LocalStorageMock implements Storage {
  // [name: string]: any
  private store = new Map<string, string>()

  get length(): number {
    return this.store.size
  }

  key(index: number): string | null {
    throw new Error("Method not implemented.");
  }

  clear() {
    this.store.clear()
  }

  getItem(key: string) {
    return this.store.get(key) || null;
  }

  setItem(key: string, value: string) {
    this.store.set(key, value)
  }

  removeItem(key: string) {
    this.store.delete(key)
  }
};

// global.localStorage = new LocalStorageMock()

describe('app storage manager', () => {
  const newApp = {
    id: uuidv4(),
    name: 'aa',
    email: 'bb',
    age: 18,
    phone: '562',
    englishLevel: 'A1',
    skills: 'kk',
    personal: 'per',
    studyFromHome: true,
    wayOfCommunication: 'email',
    startDate: new Date()
  }

  beforeEach(() => {
    global.localStorage = new LocalStorageMock()
  })

  it('adds new app', () => {
    AppStorageManager.addApp(newApp)
    expect(AppStorageManager.getAll()).toHaveLength(1)
  })

  it('deletes app', () => {
    AppStorageManager.addApp(newApp)
    AppStorageManager.deleteApp(newApp.id)
    expect(AppStorageManager.getAll()).toHaveLength(0)
  })
  it('updates app', () => {
    AppStorageManager.addApp(newApp)
    const updated = { ...newApp, age: 20 }
    AppStorageManager.updateApp(updated)
    expect(AppStorageManager.getAll()[0]).toStrictEqual(updated)
  })
});
