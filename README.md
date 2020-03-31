# scapi
REST API for the Smart Campus Project

Deployed at https://scapi.now.sh

Endpoints:
- [GET /api/create](#get-apicreate)
- [GET /api/read](#get-apiread)
- [GET /api/update](#get-apiupdate)
- [GET /api/delete](#get-apidelete)
- [GET /api/find](#get-apifind)
- [GET /api/check](#get-apicheck)

## GET /api/create
Registers a new user.
### Return Value
`"Created"`
### Parameters
| Name          | Type     | Required | Default | Description                     |
| :-            | :-:      | :-:      | :-:     | :-                              |
| `id`          | `Number` | yes      |         | Student ID                      |
| `name`        | `String` | yes      |         | Name                            |
| `fatherName`  | `String` | yes      |         | Father's name                   |
| `createdDate` | `Date`   | yes      |         | Registered date of student card |
| `expireDate`  | `Date`   | yes      |         | Expiry date of student card     |

## GET /api/read
Lists all users.
### Return Value
`[userObject1, userObject2,...]`
### Parameters
None

## GET /api/update
Updates the properties of a user specified by `searchid`.
### Return Value
`"Updated"`
### Parameters
| Name          | Type      | Required | Default       | Description                     |
| :-            | :-:       | :-:      | :-:           | :-                              |
| `searchid`    | `Number`  | yes      | \(unchanged\) | ID of the user to be updated    |
| `name`        | `String`  | no       | \(unchanged\) | Name                            |
| `fatherName`  | `String`  | no       | \(unchanged\) | Father's name                   |
| `createdDate` | `Date`    | no       | \(unchanged\) | Registered date of student card |
| `expireDate`  | `Date`    | no       | \(unchanged\) | Expiry date of student card     |
| `fileToWrite` | `Boolean` | no       | \(unchanged\) | If `true`, user will be queued to be written to next card. Must be set to `false` after being written |
| `log`         | `Date`    | no       | \(unchanged\) | Time when card was scanned      |

## GET /api/delete
Deletes a user specified by `searchid`.
### Return Value
`"Deleted"`
### Parameters
| Name       | Type     | Required | Default | Description                  |
| :-         | :-:      | :-:      | :-:     | :-                           |
| `searchid` | `Number` | yes      |         | ID of the user to be deleted |
 
## GET /api/find
Finds a user specified by `searchid`.
### Return Value
If user exists, returns the user object. Else, returns `""`.
### Parameters
| Name       | Type     | Required | Default | Description                       |
| :-         | :-:      | :-:      | :-:     | :-                                |
| `searchid` | `Number` | yes      |         | ID of the user to be searched for |

## GET /api/check
Finds a user with `fileToWrite` set to `true`. Used for writing to cards.
### Return Value
If user exists, returns the user object. Else, returns `""`.
### Parameters
None
