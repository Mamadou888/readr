import { base } from '../db/database';

function getRequests(){
    var s = "function gets called";
    console.log(s);

    base.fetch('requests', {
        context: this,
        asArray: true,
        then(data){
        console.log(data[3]);
        return (data[3].toString);
        }
    });
}

export {getRequests}
