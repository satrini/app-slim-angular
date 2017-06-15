<?php

namespace App/Models 

use Illuminate\Eloquent\Database\Model as Eloquent;

class Pic extends Eloquent
{
	protected $primaryKey = 'id';

	protected $table = 'pics';

	protected $fillable = ['name', 'url', 'description'];
	
	public $timestamps = false;
}
