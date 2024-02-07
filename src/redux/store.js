const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";
const ADD_COMMENT = "ADD_COMMENT";
let store = {
    _state: {
        houses: [
            {
              name: "Из бетона",
              image: "./images/House1.png",
              id: 1,
              description: ""
            },
            {
              name: "Из кирпича",
              image: "./images/House1.png",
              id: 2,
              description: ""
            },
            {
              name: "Из дерево",
              image: "./images/House1.png",
              id: 3,
              description: ""
            },
        ],
        newHouseName: "",
        newHouseDescription: "",
    },

    getState(){
      return this._state;
    },

    _callSubscribe(){
      console.log("state changed");
    },

    subscribe(observer){
      this._callSubscribe = observer;  
    },

    dispatch(action){
      if(action.type == ADD_HOUSE){
        let newHouse = {
          name: this.getState().newHouseName,
          description: this.getState().newHouseDescription,
          image: "./images/House1.png",
          id: this.getState().houses.length+1,
        } 
        this.getState().houses.push(newHouse)
        this._callSubscribe(store)
      }
      else if(action.type == UPDATE_NEW_HOUSES_TEXT){
        this.getState().newHouseName = action.newHouseNameText;
        this.getState().newHouseDescription = action.newHouseDescriptionText;
        this._callSubscribe(store);
      }
      else if(action.type == ADD_COMMENT){
        console.log(123)
      }
      
    }

}


export const addHouseActionCreater = ()=> ({type: ADD_HOUSE});

export const updateNewHousesTextActionCreater = (newHouseName,newHouseDescription)=>({type: UPDATE_NEW_HOUSES_TEXT,newHouseNameText: newHouseName,newHouseDescriptionText:  newHouseDescription})

export const addCommentActionCreater = () =>({type: ADD_COMMENT});

export default store;

