<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rt_retailer', function (Blueprint $table) {
            $table->id();
            $table->string('name', 60);
            $table->string('address', 60);
            $table->string('city', 60);
            $table->string('mobile', 60);
            $table->string('email', 60);
            $table->string('proof', 60);
            $table->string('uname', 60);
            $table->string('pass', 60);
            $table->string('create_date', 60);
            $table->string('status', 60);


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rt_retailer');
    }
};
