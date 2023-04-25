<?php

class Utilisateur
{
    private string $name;
    private string $email;

    // public function __construct($name, $email)
    // {
    //     $this->name = $name;
    //     $this->email = $email;
    // }

    public function __get($property)
    {
        echo $this->$property;
    }

    public function __set($property, $value)
    {
        $this->$property = $value;
    }
}

$jo = new Utilisateur;
$jo->__set("name", "John");
// $jo->__get("name");



class Panier
{
    private array $articles;

    public function __get($property)
    {
        return $this->$property;
    }

    public function __set($property, $value)
    {
        $this->$property = [$value];
    }

    public function __isset($property)
    {
        return isset($this->articles[$property]);
    }
}

$panier = new Panier;
$panier->__set("articles", [1,2,3]);
var_dump($panier->__isset("articles"));
$panier->__get("articles");
var_dump($panier->__isset(3));

