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
        Schema::create('rt_product', function (Blueprint $table) {
            $table->id();
            $table->string('retailer', 100);
            $table->string('category', 100);
            $table->string('product', 100);
            $table->string('price', 100);
            $table->string('quantity', 100);
            $table->string('photo', 100);
            $table->string('details', 100);
            $table->string('status', 100);
            $table->string('required_qty', 100);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rt_product');
    }
};
