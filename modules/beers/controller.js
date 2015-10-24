var Model = require('./model');
var Controller = {
	create: function(req, res){
		var dados = req.body;

	var model = new Model(dados);
	var msg = '';
	model.save(function(err, data){
		if(err){
			console.log('Erro: ', err);	
			msg = err;		
		}else{
			console.log('Cerveja inserida ', data);
			msg= data;
		}
		  res.json(msg);
	});
	},
	
	retrieve: function(req, res){

	var query = {};

	Model.find(query, function(err, data){
		if(err){
			console.log('Erro : ', err);
			msg = err;	
		}else{
			console.log('Listagem ', data);
			msg= data;
		}
		res.json(msg);
	});

	},
	list: function(req, res){

	var query = {};

	Model.find(query, function(err, data){
		if(err){
			console.log('Erro : ', err);
			msg = 'Erro: '+err;	
		}else{
			console.log('Listagem ', data);
			msg= 'Listagem '+ data;
		}
		res.render('list', { title: 'Listagem de cervejas', beers: data });
	});

	},
	
	get: function(req, res){

	var query = { _id: req.params.id};

	Model.findOne(query, function(err, data){
		if(err){
			console.log('Erro : ', err);
			msg = err;	
		}else{
			console.log('Listagem ', data);
			msg= data;
		}
		res.json(msg);
	});

	},
	update:function(req, res){

		var query = { _id: req.params.id};

		var mod = req.body;

		var optional= {
			upsert: false,
			multi: true
		};

		Model.update(query, mod, optional, function(err, data){
			if(err){
				console.log('Erro: ', err);
				msg = err;	
			}else{
				console.log('Cerveja atualizada com sucesso: ', data);
				msg= data;
			}
			res.json(msg);
		});
	},
	delete: function (req, res){

		var query = { _id: req.params.id};

		//E multi CUIDADO

		Model.remove(query, function(err, data){
			if(err){
				console.log('Erro: ', err);
				msg = err;	
			}else{
				console.log('Cerveja deletada com sucesso, quantidade: ', data.result);
				msg= data.result;
			}
			res.json(msg);
		});

	}
}

module.exports = Controller;