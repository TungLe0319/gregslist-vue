import { sandboxServer } from "./AxiosService.js"

class CarsService{


  async getCars(){
    const res = await sandboxServer.get('/api/cars')
    console.log(res.data);
  }
}

export const carsService = new CarsService()