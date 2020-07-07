import { Application } from "./AppStorageManager"

export type EditAppAction =
  | { type: "setName", payload: { name: string } }
  | { type: "setEmail", payload: { email: string } }
  | { type: "setAge", payload: { age: number } }
  | { type: "setPhone", payload: { phone: string } }
  | { type: "setEnglishLevel", payload: { englishLevel: string } }
  | { type: "setSkills", payload: { skills: string } }
  | { type: "setPersonal", payload: { personal: string } }
  | { type: "setStudyFromHome", payload: { studyFromHome: boolean } }
  | { type: "setWayOfCommunication", payload: { wayOfCommunication: 'phone' | 'email' } }
  | { type: "setStartDate", payload: { startDate: Date } }

export function reducer(state: Application, action: EditAppAction) : Application {

  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload.name }
    case "setEmail":
      return { ...state, email: action.payload.email }
    case "setAge":
      return { ...state, age: action.payload.age }
    case "setPhone":
      return { ...state, phone: action.payload.phone }
    case "setEnglishLevel":
      return { ...state, englishLevel: action.payload.englishLevel }
    case "setSkills":
      return { ...state, skills: action.payload.skills }
    case "setPersonal":
      return { ...state, personal: action.payload.personal }
    case "setStudyFromHome":
      return { ...state, studyFromHome: action.payload.studyFromHome }
    case "setWayOfCommunication":
      return { ...state, wayOfCommunication: action.payload.wayOfCommunication }
    case "setStartDate":
      return { ...state, startDate: action.payload.startDate }
  }
}