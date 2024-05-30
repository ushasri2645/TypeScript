let result2='';
export namespace Utils{
    export function PrintObjects(objs : any) : string{
        for(const property in objs){
            if(typeof objs[property] == 'object' ){
                result2 += `${PrintObjects(objs[property])}, `;
            }
            else{
                result2 += `${property} : ${objs[property]}, `;
            }
        }
        result2=result2.slice(0,-2);
        return result2;
}
}
