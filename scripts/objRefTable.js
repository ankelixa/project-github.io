const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Mouse.Cnds.OnObjectClicked
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Solid: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{Dinosaurio: 0},
	{Keyboard: 0},
	{Pollo: 0},
	{Fuego: 0},
	{Título: 0},
	{fuegoooo: 0},
	{Mouse: 0},
	{Button: 0},
	{Sprite: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Platform: class extends self.ITiledBackgroundInstance {},
	Dinosaurio: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Pollo: class extends self.ISpriteInstance {},
	Fuego: class extends self.ISpriteInstance {},
	Título: class extends self.ITextInstance {},
	fuegoooo: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Button: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {}
}