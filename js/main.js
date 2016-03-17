var $ul = $('ul')

grains.forEach( {
  var $li = $('<li>');
  var $img = $('<img>');
  var $h2 = $('<h2>');
  var $p = $('<p>');

  $li.append($img, $h2, $p)

  $ul.append($li)
}
