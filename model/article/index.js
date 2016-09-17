module.exports = mongoose => {
	const Article = new mongoose.Schema({
		title : {
			type : String,
			required : 1
		},
		file : {
			type : String,
			default : ""
		},
		description : {
			type : String,
			required : 1
		},
		keyword : {
			type : String,
			required : 1
		},
		content : {
			type : String,
			required : 1
		},
		createTime : {
			type : Date,
			default : Date.now()
		},
		modifiedTime : {
			type : Date,
			default : Date.now()
		}
	});
	return mongoose.model("Article", Article);
};