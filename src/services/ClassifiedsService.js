import { AppState } from "../AppState.js"
import { Classified } from "../models/Classified.js"
import { api } from "./AxiosService.js"

class ClassifiedsService{


  async getClassifieds(){
    const res = await api.get('api/classifieds')
    AppState.classifieds = res.data.map(c=> new Classified(c))
    console.log(AppState.classifieds);
  }
}
export const classifiedService = new ClassifiedsService()