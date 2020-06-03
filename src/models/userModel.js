
// User Model 

const { Model } = require('objection');

class User extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'user';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        fullName : { type : "string" },
        dob : { type : "date"},
        posts : {
          type : "Object",
          properties : {
            title : { type : "string"},
            content : { type : "text"}
          }
        }
      }
    };
  }

//  Model Hooks ( these hook runs before insert query in database ).

//   async $beforeInsert(res) {
//     await super.$beforeInsert();

//     console.log('in before insert');
//     console.log(this.email);
//     if(this.password === ''){
//       throw new ValidationError({
//         message: "Please enter a password",
//         type: "ModelValidation"
//       })
//     }
//     if (!validator.isEmail(this.email || '')) {
//       throw new ValidationError({
//         message: "Not a valid email address!",
//         type: "ModelValidation",
//       })
//     }
//     let err,result;
//     [err,result] = await to(this.constructor.query().select('id').where('email', this.email).first());
//     console.log(err);
//     if (result) {
//       throw new ValidationError({
//         message: "Account with this email already exists!"
//       });
//     }

//     this.password ? this.password = await bcrypt.hash(this.password, 10) : null;

//   }

  static get relationMappings(){
    const UserPostModel = require("./userPostModel");
    return {
      posts : {
        relation : Model.HasManyRelation,
        modelClass : UserPostModel,
        join : {
          from : "user.id",
          to : "posts.created_by"
        }
      }
    }
  }

}

module.exports = User;