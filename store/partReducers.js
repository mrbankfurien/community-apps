
const part = { part : "HOME_PART"}

function changePart(state = part , action) {

    let nextState

    switch (action.type) {

        case "GO_TO_CREATE" :
            nextState = {
                ...state,
                part : action.value
            }
            break ;
            
        case "GO_TO_HOME" :
            nextState = {
                  ...state,
                  part : action.value
            }
        break ;

        case "GO_TO_UPDATE" :
            nextState = {
                  ...state,
                  part : action.value
            }
        break ;
          
            
            
            default:
              
              return state
              
            }
    return nextState  || state 
  }

export default changePart