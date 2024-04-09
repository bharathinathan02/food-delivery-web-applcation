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
        Schema::create('rt_forum', function (Blueprint $table) {
            $table->id();
            $table->string('category', 100);
            $table->string('subcategory', 100);
            $table->string('question', 1000);
            $table->string('uname', 100);
            $table->string('rdate', 100);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rt_forum');
    }
};
