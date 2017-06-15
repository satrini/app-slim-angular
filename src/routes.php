<?php

// index
$app->get('/', function ($request, $response, $args) {

    return $this->renderer->render($response, 'index.phtml', $args);
});

// all data
$app->get('/api/images', function ($request, $response, $args) {
    
	$json = $this->db->table('pics')->get();

   return $response->withJson($json);
});

// get data
$app->get('/api/images/{id}', function ($request, $response, $args) {
     
	$json = $this->db->table('pics')->where('id', '=', $args['id'])->get();

   return $response->withJson($json);
});

// insert data
$app->post('/api/images', function ($request, $response, $args) { 

	$data   = $request->getParsedBody();
   $table  = $this->db->table('pics');
  	$pic    = $table->insert($data);

  	return $response->withStatus(200);
});

// update data
$app->put('/api/images/{id}', function ($request, $response, $args) {

	$data = $request->getParsedBody();
	$pic = $this->db->table('pics')->where('id', '=', $args['id']);
	$pic->update($data);

  	return $response->withStatus(200);
});

// delete data
$app->delete('/api/images/{id}', function ($request, $response, $args) { 

	$pic = $this->db->table('pics')->where('id', '=', $args['id']);
	$pic->delete();

  	return $response->withStatus(200);
});
