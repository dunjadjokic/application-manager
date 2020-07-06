interface Application {
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
  
  static getApp(email: string){
    localStorage.getItem(email)
  }

  private static setAll(apps: Application[]){
    localStorage.setItem('applications', JSON.stringify(apps))
  }

  static getAll() {
    const applications = localStorage.getItem('applications') || '[]'
    return JSON.parse(applications) as Application[]
  }

  static addApp(app: Application) {
    const apps = this.getAll()
    apps.push(app)
    this.setAll(apps)
  }

  static updateApp(app: Application) {
    
  }

  static deleteApp(email: string) {
    const apps = this.getAll()
    this.setAll(apps.filter(app => app.email !== email))
  }
}