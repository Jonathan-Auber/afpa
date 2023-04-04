<?php


class batmobile
{
    private $batmobilePosition = 0;
}

class ennemies
{
    private $position;
    private $pv;

    public function __construct($position, $pv)
    {
    }

    public function getPosition($position)
    {
        $this->position = $position;
    }

    public function getPV($pv)
    {
        $this->pv = $pv;
    }
}
