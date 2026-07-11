package system_setting

import "github.com/QuantumNous/new-api/setting/config"

type ThemeSettings struct {
	Frontend string `json:"frontend"`
}

var themeSettings = ThemeSettings{
	Frontend: "default",
}

func init() {
	config.GlobalConfig.Register("theme", &themeSettings)
}

// UpdateAndSyncTheme keeps legacy persisted values on the supported frontend.
func UpdateAndSyncTheme() {
	themeSettings.Frontend = "default"
}
