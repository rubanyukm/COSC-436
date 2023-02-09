
<?php

function createIdPassword($lastName, $firstName) {

    $id = substr($firstName, 0, 1) .$lastName;
    $password = substr($firstName, 0, 1) .substr($firstName, -1) .substr($lastName, 0, 3) .strlen($firstName ).strlen($lastName);

    $id = strtoupper($id);
    $password = strtoupper($password);

    return array("ID" => $id, "Password" => $password);

}

echo createIdPassword("Maxwell", "John")["ID"];
echo createIdPassword("Maxwell", "John")["Password"];
?>