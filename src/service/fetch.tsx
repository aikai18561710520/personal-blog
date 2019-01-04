import flyio, {Fly} from 'flyio'
interface IService {
    fetch : Fly
}
class Service implements IService {
    public fetch : Fly
    constructor() {
        this.fetch = flyio
    }
}
export default Service
