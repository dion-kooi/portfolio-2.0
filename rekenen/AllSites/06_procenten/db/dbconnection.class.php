<?php
class Dbconnection extends PDO
{
    private $host = "dionkooi.nl.mysql";
    private $dbname = "dionkooi_nlrekenen_dionkooi";
    private $user = "dionkooi_nlrekenen_dionkooi";
    private $pass = "DionKooiRekenenDataBase";
    public function __construct()
    {
        parent::__construct("mysql:host=".$this->host.";dbname=".$this->dbname."; charset=utf8", $this->user, $this->pass);
        $this->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    }
}