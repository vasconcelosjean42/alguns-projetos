json = {
    "accountAlias": {
        "alias": "123",
        "aliasType": "PHONER"
    },
    "account": {
        "type": "SVGH",
        "openingDate": "2023-05-30"
    },
    "accountOwner": {
        "id": "312",
        "entityType": "Person",
        "fullName": "Matera",
        "tradeName": "Jadson"
    }
}
json["accountAlias"].pop('aliasType')
print(json)