package config

// "github.com/go-sql-driver/mysql"
import (
	"database/sql"
	"lib/helper"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func init() {
	var err error
	DB, err = sql.Open("mysql", "root:root_password@tcp(database:3306)/rest_api")
	helper.CheckErr(err)

	//fmt.Println("You connected to your database.")
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}