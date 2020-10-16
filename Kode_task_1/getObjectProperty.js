const getObjectProperty = (obj, path, defaultValue) => {
    nodes =  path.split('.');
    targetObject = obj;
    for (let node of nodes) {
        if ( !( node in targetObject ) ) {
            return defaultValue; 
        }
        targetObject = targetObject[node];
    }
    return targetObject;
  }
  
const obj = {
    'pupa': {
        'lupa': {
        'beep': 'boop',
        },
        'foo': 'bar',
    },
};
 
getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
getObjectProperty(obj, "pupa.foo"); // > 'bar'
getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
getObjectProperty(obj, "pupa.ne.tuda", true); // > true
getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'