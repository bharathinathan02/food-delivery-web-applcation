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
        Schema::create('rt_cart', function (Blueprint $table) {
            $table->id();
            $table->string('uname', 100);
            $table->string('pid', 100);
            $table->string('status', 100);
            $table->string('rdate', 100);
            $table->string('price', 100);
            $table->string('category', 100);
            $table->string('quantity', 100);
            $table->string('uqut', 100);
            $table->string('amount', 100);
            $table->string('pname', 100);
            $table->string('pimage', 100);
            $table->string('retailer', 100);
            $table->string('deli_mode', 100);
            $table->string('shipping_address', 100);
            $table->string('d_status', 100);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rt_cart');
    }
};
