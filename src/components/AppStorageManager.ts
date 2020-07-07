interface Application {
  id: string,
  name: string,
  email: string,
  age: number,
  phone: string,
  englishLevel: string,
  skills: string,
  personal: string,
  studyFromHome: boolean,
  wayOfCommunication: string,
  startDate: Date
}

export default class AppStorageManager {

  private static setAll(apps: Application[]) {
    localStorage.setItem('applications', JSON.stringify(apps))
  }

  static getAll() {
    const applications = JSON.parse(localStorage.getItem('applications') || '[]') as any[]
    return applications.map(app => ({ ...app, startDate: new Date(app.startDate) }) as Application)
  }

  static addApp(app: Application) {
    const apps = this.getAll()
    apps.push(app)
    this.setAll(apps)
  }

  static updateApp(app: Application) {
    const apps = this.getAll()
    const index = apps.findIndex(a => a.id === app.id)
    apps[index] = app
    this.setAll(apps)
  }

  static deleteApp(id: string) {
    const apps = this.getAll()
    const newApps = apps.filter(app => app.id !== id)
    this.setAll(newApps)
  }
}