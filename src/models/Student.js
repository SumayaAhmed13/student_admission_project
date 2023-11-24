const mongoose=require('mongoose');

const StudentSchema=mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    gender:{type:String},
    nationality:{type:String},
    address:{type:String},
    email:{type:String},
    phone:{type:String},
    courses:{type:String},
    dateOfBirth:{type:String},
    admissionDate:{type:String},
 
},{timestamps: true,versionKey:false});

const StudentModel=mongoose.model('students',StudentSchema);
module.exports=StudentModel