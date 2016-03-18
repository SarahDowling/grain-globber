var $ul = $('ul');

grains.forEach(function (item) {
  var $li = $('<li>');
  var $img = $('<img>');
  var $p = $('<p>');
  var $h2 = $('<h2>');

  $ul.append($li);
  $img.attr('src', 'images/' + item.img);
  $li.append($img);
  $h3.html(item.name);
  $li.append($h2);
  $p.html(item.desc);
  $li.append($p);
});
