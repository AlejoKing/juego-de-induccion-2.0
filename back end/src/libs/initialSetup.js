import { Console } from 'console';
import Role from '../models/Role';

export const createRol = async ()  =>{

    try {
        const count = await Role.estimatedDocumentCount()

    if (count > 0 ) return;
     
    const values = await Promise.all([
    new Role({tName: 'user'}).save(),
    new Role({tName:'admin'}).save()
    ])

    console.log(values);
    } catch (error) {
        console.error(error)
    }

}