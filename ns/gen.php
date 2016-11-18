<?
$c = file_get_contents("https://www.w3.org/ns/activitystreams.jsonld");
$a = json_decode($c, true);
foreach($a["@context"] as $term => $data){
?>
  <li><a href="https://www.w3.org/TR/activitystreams-vocabulary#dfn-<?=strtolower($term)?>"><?=$term?></a> <?=is_array($data) && isset($data["@type"]) ? "(<code>".$data["@type"]."</code>)" : ""?></li>
<?
}
?>