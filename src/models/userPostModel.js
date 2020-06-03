
// Posts Model 

const { Model } = require('objection');

class Posts extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'posts';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        title : { type : "string" },
        content : { type : "text"}
      }
    };
  }

  static get relationMappings(){
      const UserModel = require("./userModel");
    return {
        user: {
            relation : Model.BelongsToOneRelation,
            modelClass : UserModel,
            join : {
                from : "posts.created_by",
                to  : "user.id"
            }
        }
    }
  }

}

module.exports = Posts;