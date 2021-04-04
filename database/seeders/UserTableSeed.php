<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Adm',
            'email' => 'adm@brasprime.com.br',
            'password' => 'BrasPrim32021'
        ]);
    }
}
