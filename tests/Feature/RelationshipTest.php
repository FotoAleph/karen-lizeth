<?php

namespace Tests\Feature;

use App\Models\Familia;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RelationshipTest extends TestCase
{
    use RefreshDatabase;

    public function test_familia_can_have_invitados()
    {
        $familia = Familia::create([
            'apellido' => 'Test Family',
            'telefono' => '1234567890',
        ]);

        $familia->invitados()->createMany([
            ['nombre' => 'Guest 1', 'edad' => '20'],
            ['nombre' => 'Guest 2', 'edad' => '30'],
        ]);

        $this->assertEquals(2, $familia->invitados()->count());
        $this->assertEquals(2, $familia->invitados->count());
        $this->assertEquals('Guest 1', $familia->invitados->first()->nombre);
    }

    public function test_invitado_belongs_to_familia()
    {
        $familia = Familia::create([
            'apellido' => 'Test Family 2',
            'telefono' => '0987654321',
        ]);

        $invitado = $familia->invitados()->create([
            'nombre' => 'Guest 3',
            'edad' => '40',
        ]);

        $this->assertTrue($invitado->familia->is($familia));
    }
}
