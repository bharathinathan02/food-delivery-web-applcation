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
        Schema::create('rt_answer', function (Blueprint $table) {
            $table->id();
            $table->string('postedby', 100);
            $table->string('category', 100);
            $table->string('question', 100);
            $table->string('answer', 100);
            $table->string('answerby', 100);
            $table->string('rdate', 100);
            $table->string('catid', 100);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rt_answer');
    }
};
