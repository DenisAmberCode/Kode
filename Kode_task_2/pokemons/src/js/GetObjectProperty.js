const getObjectProperty = (obj, path, defaultValue) => {
    const nodes =  path.split('.');

    let targetObject = obj;
    for (let node of nodes) {
        if ( !( node in targetObject ) ) {
            return defaultValue; 
        }
        targetObject = targetObject[node];
    }
    return targetObject;
  }
  
export default getObjectProperty;