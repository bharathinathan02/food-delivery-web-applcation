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
        Schema::create('rt_review', function (Blueprint $table) {
            $table->id();
            $table->string('uname', 100);
            $table->string('pid', 100);
            $table->string('review', 100);
            $table->string('cid', 100);
            $table->string('code', 100);
            $table->string('rdate', 100);
            $table->string('status', 100);
           
        });
    }
   
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rt_review');
    }
};
