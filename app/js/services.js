'use strict';

/* Services */

landingApp.factory('deviceService', function ($log, $window, $cookieStore, $location, deviceType) {

    return function () {


        console.log($location.path());
        console.log('yo');
        $log.info('yo');

        if (/Android|webOS|iPhone|iPad|iPod|PlayBook|BlackBerry|IEMobile|Opera Mini|SymbianOS/i.test(navigator.userAgent)) {
            //Filter for mobile devices. This service runs at app start

            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                deviceType.isIos = true;
            }
            else if (/Android/i.test(navigator.userAgent)) {
                deviceType.isAndroid = true;
            }
            else if (/webOS|PlayBook|BlackBerry|IEMobile|Opera Mini|SymbianOS/i.test(navigator.userAgent)) {
                //what receiver files will these use? e.g, nokia = SymbianOA; Nokia Lumia = IEMobile?;
//                deviceType.isIos = true;//for now have these os's follow IOS as will be using the same config file

            }

            deviceType.isDesktop = false;

            $location.path('/CountryPicker');
        }
        else {
            //you are on a desktop
            var cookie = $cookieStore.get('aoCookie');
            if (cookie != undefined) {

                //Go to office of aoCookie value
                $window.location.href = cookie.message;

            } else {
                $location.path('/CountryPicker');

            }

        }
    }
});

deleteCookieApp.factory('deleteCookieService', function ($cookieStore, $window, $rootScope) {

    var cookie = $cookieStore.get('aoCookie');

    if (cookie != undefined) {
        $cookieStore.remove('aoCookie');
        $rootScope.$digest();
    }

    $window.location.href = 'http://myallenoverylandingpage.azurewebsites.net/app/index.html';

});

landingApp.factory('utilityService', function () {

    return {
        getItemByName: function (name, items) {
            var foundItem = _.find(items, function (item) {

                return item.name === name;

            });

            return foundItem;
        },
        getEntryById: function (entryId, entries) {

            var foundEntry = _.find(entries, function (entry) {

                return entry.sys.id === entryId;

            });

            return foundEntry;

        },
        getAssetById: function (assetId, assets) {

            var foundAsset = _.find(assets, function (asset) {

                return asset.sys.id === assetId;

            });

            return foundAsset;

        },
        dataHasErrors: function (data) {

            var errors = data.errors;
            return (typeof errors !== "undefined");

        }
    }

});

landingApp.value('countryData', {
    countries: [
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "5G9P9SscmIkeGUUSYOmWyi",
                "revision": 6,
                "createdAt": "2014-07-18T08:03:53.034Z",
                "updatedAt": "2014-08-13T09:55:33.445Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "United Kingdom",
                "name": "United Kingdom",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "3mPVzZdU5iukGKOKgcOCIW",
                            "revision": 1,
                            "createdAt": "2014-07-28T11:09:12.459Z",
                            "updatedAt": "2014-07-28T11:09:12.459Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Belfast",
                            "name": "Belfast",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "2n05I2UFOcmkok0MyKKSi2",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:19:32.912Z",
                                    "updatedAt": "2014-09-22T15:57:50.801Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler RDC",
                                    "name": "Netscaler 2",
                                    "dataCentre": "RDC",
                                    "urlEndpoint": "https://EU2.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "6HOvTl4qmAuEEWOqG8QSyk",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:07:45.237Z",
                                                "updatedAt": "2014-08-05T09:07:45.237Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "title": "ReceiverConfig.cr (EU2)",
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 799
                                                    },
                                                    "url": "config/IosConfigFiles/EU2/ReceiverConfig.cr"
                                                }
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 799
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU2/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU2- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "7GOw038n8kA42EMyGMwi6I",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:27:57.008Z",
                                                "updatedAt": "2014-08-06T09:27:57.008Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU2/ReceiverConfig.cr"
                                }
                            }
                        }
                    },
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "4UaiuwZhRK2siIQK8U4qg0",
                            "revision": 3,
                            "createdAt": "2014-07-18T09:25:43.541Z",
                            "updatedAt": "2014-07-18T10:20:03.412Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "London",
                            "name": "London",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "2n05I2UFOcmkok0MyKKSi2",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:19:32.912Z",
                                    "updatedAt": "2014-09-22T15:57:50.801Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler RDC",
                                    "name": "Netscaler 2",
                                    "dataCentre": "RDC",
                                    "urlEndpoint": "https://EU2.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "6HOvTl4qmAuEEWOqG8QSyk",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:07:45.237Z",
                                                "updatedAt": "2014-08-05T09:07:45.237Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "title": "ReceiverConfig.cr (EU2)",
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 799
                                                    },
                                                    "url": "//assets.contentful.com/8u2cofzt5au2/6HOvTl4qmAuEEWOqG8QSyk/27a7ba0b82293f5aa85108eb828a6b49/ReceiverConfig.cr"
                                                }
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 799
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU2/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU2- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "7GOw038n8kA42EMyGMwi6I",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:27:57.008Z",
                                                "updatedAt": "2014-08-06T09:27:57.008Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU2/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "4j4atFF4JGk2wuMs6oE4M8",
                        "revision": 2,
                        "createdAt": "2014-08-13T09:46:43.712Z",
                        "updatedAt": "2014-09-10T11:12:23.452Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_united_kingdom.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 1387
                            },
                            "url": "img/flags/flag_united_kingdom.png"
                        },
                        "title": "United-Kingdom-flag-24",
                        "description": "United-Kingdom-flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "1KbNtDtVAsYSeK06WK46SS",
                "revision": 2,
                "createdAt": "2014-07-18T11:07:24.581Z",
                "updatedAt": "2014-08-13T10:25:23.060Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Netherlands",
                "name": "Netherlands",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "6EEJYrq7PqyeYoOuGOC6OA",
                            "revision": 1,
                            "createdAt": "2014-07-18T11:07:06.752Z",
                            "updatedAt": "2014-07-18T11:07:06.752Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Amsterdam",
                            "name": "Amsterdam",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "//assets.contentful.com/8u2cofzt5au2/26hSmn1ZdOCe6oaeqKmimi/f969971f6d07485adf34e7c3e6c4dd98/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "3g2WEwnppmAOs8QYAaeIUS",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:25:19.462Z",
                        "updatedAt": "2014-09-10T11:09:19.242Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_netherlands.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 834
                            },
                            "url": "img/flags/flag_netherlands.png"
                        },
                        "title": "Netherlands-Flag-24",
                        "description": "Netherlands-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "22QBtt8L2U2ig6eIkkSMCc",
                "revision": 2,
                "createdAt": "2014-07-28T11:05:01.125Z",
                "updatedAt": "2014-08-13T10:26:40.699Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Singapore",
                "name": "Singapore",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "5NRauRLpuMKAWUkOCQg2Iy",
                            "revision": 1,
                            "createdAt": "2014-07-28T11:04:54.082Z",
                            "updatedAt": "2014-07-28T11:04:54.082Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Singapore",
                            "name": "Singapore",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "4BKRMHpikgQ640cS0Kq4kU",
                                    "revision": 3,
                                    "createdAt": "2014-07-28T11:04:42.497Z",
                                    "updatedAt": "2014-09-22T15:59:23.006Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler SN",
                                    "name": "Netscaler Asia",
                                    "dataCentre": "Asia",
                                    "urlEndpoint": "https://SN1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Qu8JVMbleW8Us6cOqOA2u",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:09:38.031Z",
                                                "updatedAt": "2014-08-05T09:09:38.031Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "title": "ReceiverConfig.cr(SN1)",
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                                }
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/AndroidConfigFiles/SN1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(SN1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "4k1lhvo4X6y8kYGY8iCowu",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:29:09.637Z",
                                                "updatedAt": "2014-08-06T09:29:09.638Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "40xo6PNcq4egs2UgAg2kiu",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:26:13.607Z",
                        "updatedAt": "2014-09-10T11:08:44.373Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_singapore.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 884
                            },
                            "url": "img/flags/flag_singapore.png"
                        },
                        "title": "Singapore-Flag-24",
                        "description": "Singapore-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "s3iRGE1K2kI24cgYeSe20",
                "revision": 3,
                "createdAt": "2014-07-18T11:07:33.342Z",
                "updatedAt": "2014-08-13T10:32:40.402Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Italy",
                "name": "Italy",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "32oFu09Ums8EMMqwYSY6OW",
                            "revision": 2,
                            "createdAt": "2014-07-18T11:07:07.999Z",
                            "updatedAt": "2014-07-18T11:08:25.055Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Milan",
                            "name": "Milan",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    },
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "6ryN1Xn3e8E4SISiGiYYGy",
                            "revision": 1,
                            "createdAt": "2014-08-12T13:46:27.167Z",
                            "updatedAt": "2014-08-12T13:46:27.167Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Rome",
                            "name": "Rome",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "38dcBxulBCCEmOYsGWQy0e",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:32:37.686Z",
                        "updatedAt": "2014-09-10T11:08:12.689Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_italy.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 934
                            },
                            "url": "img/flags/flag_italy.png"
                        },
                        "title": "Italy-Flag-24",
                        "description": "Italy-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "19Ye8qjsdEcOiCA6ckgkiu",
                "revision": 2,
                "createdAt": "2014-07-18T10:41:29.639Z",
                "updatedAt": "2014-08-13T10:24:30.490Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "France",
                "name": "France",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "1QweDqhyHGAgGk0Q26kweO",
                            "revision": 1,
                            "createdAt": "2014-07-18T10:41:25.686Z",
                            "updatedAt": "2014-07-18T10:41:25.686Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Paris",
                            "name": "Paris",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "4IPUrk8Bo48Aue2IeaI8sI",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:24:25.346Z",
                        "updatedAt": "2014-09-10T11:09:58.345Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_france.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 843
                            },
                            "url": "img/flags/flag_france.png"
                        },
                        "title": "France-Flag-24",
                        "description": "France-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "5csx6HgrtCkK6ms0wKSWK6",
                "revision": 6,
                "createdAt": "2014-07-18T08:03:52.283Z",
                "updatedAt": "2014-08-13T10:34:30.215Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Germany",
                "name": "Germany",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "fG4IBlQsDKwGWme04AG6Y",
                            "revision": 5,
                            "createdAt": "2014-07-18T09:22:49.098Z",
                            "updatedAt": "2014-07-18T10:20:04.130Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Hamburg",
                            "name": "Hamburg",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    },
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "5s5sR8AVZ6u8sOSwsCKwAQ",
                            "revision": 4,
                            "createdAt": "2014-07-18T09:23:17.021Z",
                            "updatedAt": "2014-07-18T10:20:04.370Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Frankfurt",
                            "name": "Frankfurt",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    },
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "3tPJv3XzS8YoYE8EMKcyoG",
                            "revision": 1,
                            "createdAt": "2014-08-12T13:48:14.173Z",
                            "updatedAt": "2014-08-12T13:48:14.173Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Dusseldorf",
                            "name": "Dusseldorf",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    },
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "4XgP8Tc5xmKQUyCUwC2s0c",
                            "revision": 1,
                            "createdAt": "2014-08-12T13:48:37.644Z",
                            "updatedAt": "2014-08-12T13:48:37.644Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Mannheim",
                            "name": "Mannheim",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    },
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "5pM8PD80ZUEiSKkYMEMCQE",
                            "revision": 1,
                            "createdAt": "2014-08-12T13:48:57.775Z",
                            "updatedAt": "2014-08-12T13:48:57.775Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Munich",
                            "name": "Munich",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "3hV3cst56gy4iaswom06Ko",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:34:28.064Z",
                        "updatedAt": "2014-09-10T11:07:37.215Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_germany.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 824
                            },
                            "url": "img/flags/flag_germany.png"
                        },
                        "title": "Germany-Flag-24",
                        "description": "Germany-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "62KEo5BEzKm08C4Cwecesc",
                "revision": 2,
                "createdAt": "2014-08-12T14:08:19.479Z",
                "updatedAt": "2014-08-13T10:35:01.902Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Australia",
                "name": "Australia",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "7fM25Mt2JUeeIokyC4Oq06",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:12:50.787Z",
                            "updatedAt": "2014-08-12T14:12:50.787Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Sydney",
                            "name": "Sydney",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "5K0rs9Lwyc2KgUK6KGmM0G",
                                    "revision": 3,
                                    "createdAt": "2014-08-12T14:07:32.915Z",
                                    "updatedAt": "2014-09-22T15:17:08.753Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler AU",
                                    "name": "Netscaler AU1",
                                    "dataCentre": "AU",
                                    "urlEndpoint": "https://AU1.myallenovery.net/vpn/index.html",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "3j3vC3eTwA06QEaQywM20s",
                                                "revision": 1,
                                                "createdAt": "2014-08-13T14:30:42.658Z",
                                                "updatedAt": "2014-08-13T14:30:42.659Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.zip",
                                                    "contentType": "application/x-zip-compressed",
                                                    "details": {
                                                        "size": 468
                                                    },
                                                    "url": "//assets.contentful.com/8u2cofzt5au2/3j3vC3eTwA06QEaQywM20s/238910c193cd643dfdbc222a1fc5d360/ReceiverConfig.zip"
                                                },
                                                "title": "ReceiverConfig(AU test zip)",
                                                "description": "ReceiverConfig(AU test zip)"
                                            }
                                        },
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "3iljh40AAUYYsSmmC2sS4s",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:07:12.052Z",
                                                "updatedAt": "2014-08-12T14:07:12.052Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig .xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 797
                                                    },
                                                    "url": "//assets.contentful.com/8u2cofzt5au2/3iljh40AAUYYsSmmC2sS4s/99d880ca1c4c606c7c0e057acb9e9e30/ReceiverConfig_.xml"
                                                },
                                                "title": "ReceiverConfig (AU1 Android .xml)",
                                                "description": "ReceiverConfig (AU1 Android .xml)"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "http://lnvmiweb103d:90/IosConfigFiles/AU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    },
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "aHSJ2uQQH68ImWCMAsS6K",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:08:11.340Z",
                            "updatedAt": "2014-08-12T14:08:11.340Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Perth",
                            "name": "Perth",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "5K0rs9Lwyc2KgUK6KGmM0G",
                                    "revision": 3,
                                    "createdAt": "2014-08-12T14:07:32.915Z",
                                    "updatedAt": "2014-09-22T15:17:08.753Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler AU",
                                    "name": "Netscaler AU1",
                                    "dataCentre": "AU",
                                    "urlEndpoint": "https://AU1.myallenovery.net/vpn/index.html",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "3j3vC3eTwA06QEaQywM20s",
                                                "revision": 1,
                                                "createdAt": "2014-08-13T14:30:42.658Z",
                                                "updatedAt": "2014-08-13T14:30:42.659Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.zip",
                                                    "contentType": "application/x-zip-compressed",
                                                    "details": {
                                                        "size": 468
                                                    },
                                                    "url": "//assets.contentful.com/8u2cofzt5au2/3j3vC3eTwA06QEaQywM20s/238910c193cd643dfdbc222a1fc5d360/ReceiverConfig.zip"
                                                },
                                                "title": "ReceiverConfig(AU test zip)",
                                                "description": "ReceiverConfig(AU test zip)"
                                            }
                                        },
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "3iljh40AAUYYsSmmC2sS4s",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:07:12.052Z",
                                                "updatedAt": "2014-08-12T14:07:12.052Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig .xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 797
                                                    },
                                                    "url": "//assets.contentful.com/8u2cofzt5au2/3iljh40AAUYYsSmmC2sS4s/99d880ca1c4c606c7c0e057acb9e9e30/ReceiverConfig_.xml"
                                                },
                                                "title": "ReceiverConfig (AU1 Android .xml)",
                                                "description": "ReceiverConfig (AU1 Android .xml)"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "http://lnvmiweb103d:90/IosConfigFiles/AU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "649ZeTpzkAi44mWYAwEKm2",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:34:59.102Z",
                        "updatedAt": "2014-09-10T11:06:57.143Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_australia.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 1188
                            },
                            "url": "img/flags/flag_australia.png"
                        },
                        "title": "Australia-Flag-24",
                        "description": "Australia-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "NR8jJJUAIoACcUECs2YKG",
                "revision": 2,
                "createdAt": "2014-08-12T14:10:32.882Z",
                "updatedAt": "2014-08-13T10:35:59.627Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Czech Republic",
                "name": "Czech Republic",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "2ME6WjPAlWGUaokEmgkwiU",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:10:28.298Z",
                            "updatedAt": "2014-08-12T14:10:28.298Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Prague",
                            "name": "Prague",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "4wvZ4FCHdm8ka6WAa4GUQa",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:35:56.487Z",
                        "updatedAt": "2014-09-10T11:05:58.337Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_czech_republic.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 900
                            },
                            "url": "img/flags/flag_czech_republic.png"
                        },
                        "title": "Czech-Republic-Flag-24",
                        "description": "Czech-Republic-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "37SIFnKK6cMsYGgUym46em",
                "revision": 2,
                "createdAt": "2014-08-12T14:09:28.012Z",
                "updatedAt": "2014-08-13T10:35:38.250Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Belgium",
                "name": "Belgium",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "s509up4j9m8UYmiuw0cMm",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:09:04.957Z",
                            "updatedAt": "2014-08-12T14:09:04.957Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Brussels",
                            "name": "Brussels",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    },
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "4lhL3CQ8QM8iKwSWMWM4y0",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:09:23.445Z",
                            "updatedAt": "2014-08-12T14:09:23.445Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Antwerp",
                            "name": "Antwerp",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "7nA2eueBEsEOeMkMqKm2cK",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:35:35.162Z",
                        "updatedAt": "2014-09-10T11:06:27.899Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_belgium.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 872
                            },
                            "url": "img/flags/flag_belgium.png"
                        },
                        "title": "Belgium-Flag-24",
                        "description": "Belgium-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "601JGiBbb2Aw8SMO88QGms",
                "revision": 2,
                "createdAt": "2014-08-12T14:18:35.053Z",
                "updatedAt": "2014-08-13T10:36:24.905Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Hungary",
                "name": "Hungary",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "3A0ocD6Or6Muc4QGGUKcuq",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:18:23.166Z",
                            "updatedAt": "2014-08-12T14:18:23.166Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Budapest",
                            "name": "Budapest",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "7iwNZFcfD2SqGAwq0CEm2E",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:36:20.708Z",
                        "updatedAt": "2014-09-10T11:05:11.526Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_hungary.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 871
                            },
                            "url": "img/flags/flag_hungary.png"
                        },
                        "title": "Hungary-Flag-24",
                        "description": "Hungary-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "63xE0nXa1iowEYoGaMAeEi",
                "revision": 2,
                "createdAt": "2014-08-12T14:19:27.414Z",
                "updatedAt": "2014-08-13T10:37:00.761Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Luxembourg",
                "name": "Luxembourg",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "4ComKXHu9acuC8MCiie0mm",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:19:24.975Z",
                            "updatedAt": "2014-08-12T14:19:24.975Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Luxembourg",
                            "name": "Luxembourg",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "64byKjxqGkgCcG0YIaISO8",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:36:57.434Z",
                        "updatedAt": "2014-09-10T11:04:37.261Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_luxembourg.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 894
                            },
                            "url": "img/flags/flag_luxembourg.png"
                        },
                        "title": "Luxembourg-Flag-24",
                        "description": "Luxembourg-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "4EF2fiCFCEwEuYmWUysyM",
                "revision": 2,
                "createdAt": "2014-08-12T14:22:27.381Z",
                "updatedAt": "2014-08-13T10:38:06.122Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Slovakia",
                "name": "Slovakia",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "7ing2eqFFKwYsOmAE26IOw",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:22:25.164Z",
                            "updatedAt": "2014-08-12T14:22:25.164Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Bratislava",
                            "name": "Bratislava",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "4qRImPYn7aiAG2kS0QquwS",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:38:03.130Z",
                        "updatedAt": "2014-09-10T11:02:52.605Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_slovakia.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 1019
                            },
                            "url": "img/flags/flag_slovakia.png"
                        },
                        "title": "Slovakia-Flag-24",
                        "description": "Slovakia-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "5QoypmPF0Q0oaiQW2C0cmO",
                "revision": 2,
                "createdAt": "2014-08-12T14:20:57.415Z",
                "updatedAt": "2014-08-13T10:37:43.554Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Russia",
                "name": "Russia",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "2EjHizayVCQWGWEyQAkaEE",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:20:49.766Z",
                            "updatedAt": "2014-08-12T14:20:49.766Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Moscow",
                            "name": "Moscow",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "2CBaa9981KEYOG8Sy4u4Yo",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:37:41.145Z",
                        "updatedAt": "2014-09-10T11:03:30.783Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_russia.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 801
                            },
                            "url": "img/flags/flag_russia.png"
                        },
                        "title": "Russia-Flag-24",
                        "description": "Russia-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "37i8vKUtYQCgeOUMkEQGIi",
                "revision": 2,
                "createdAt": "2014-08-12T14:20:04.444Z",
                "updatedAt": "2014-08-13T10:37:25.200Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Poland",
                "name": "Poland",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "6lpFii7PwWuAcAcKoU6eGy",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:19:58.638Z",
                            "updatedAt": "2014-08-12T14:19:58.638Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Warsaw",
                            "name": "Warsaw",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "1KhY95vjG4GQ2coguKy2ei",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:37:18.412Z",
                        "updatedAt": "2014-09-10T11:03:58.263Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_poland.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 732
                            },
                            "url": "img/flags/flag_poland.png"
                        },
                        "title": "Poland-Flag-24",
                        "description": "Poland-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "2XxjtyZw9WW20ac8wuYEek",
                "revision": 2,
                "createdAt": "2014-08-12T14:24:43.041Z",
                "updatedAt": "2014-08-13T10:39:12.824Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Vietnam",
                "name": "Vietnam",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "19uAZXuvHOKoASyS0wMIQo",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:24:17.565Z",
                            "updatedAt": "2014-08-12T14:24:17.565Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Hanoi",
                            "name": "Hanoi",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "4BKRMHpikgQ640cS0Kq4kU",
                                    "revision": 3,
                                    "createdAt": "2014-07-28T11:04:42.497Z",
                                    "updatedAt": "2014-09-22T15:59:23.006Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler SN",
                                    "name": "Netscaler Asia",
                                    "dataCentre": "Asia",
                                    "urlEndpoint": "https://SN1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Qu8JVMbleW8Us6cOqOA2u",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:09:38.031Z",
                                                "updatedAt": "2014-08-05T09:09:38.031Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "title": "ReceiverConfig.cr(SN1)",
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                                }
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/AndroidConfigFiles/SN1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(SN1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "4k1lhvo4X6y8kYGY8iCowu",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:29:09.637Z",
                                                "updatedAt": "2014-08-06T09:29:09.638Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                }
                            }
                        }
                    },
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "5CbmyV0VqwUEskIwgWmuCw",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:24:33.042Z",
                            "updatedAt": "2014-08-12T14:24:33.042Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Ho Chi Minh City",
                            "name": "Ho Chi Minh City",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "4BKRMHpikgQ640cS0Kq4kU",
                                    "revision": 3,
                                    "createdAt": "2014-07-28T11:04:42.497Z",
                                    "updatedAt": "2014-09-22T15:59:23.006Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler SN",
                                    "name": "Netscaler Asia",
                                    "dataCentre": "Asia",
                                    "urlEndpoint": "https://SN1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Qu8JVMbleW8Us6cOqOA2u",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:09:38.031Z",
                                                "updatedAt": "2014-08-05T09:09:38.031Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "title": "ReceiverConfig.cr(SN1)",
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                                }
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/AndroidConfigFiles/SN1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(SN1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "4k1lhvo4X6y8kYGY8iCowu",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:29:09.637Z",
                                                "updatedAt": "2014-08-06T09:29:09.638Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "SK3HNDmBSSme2YeeukUuA",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:39:07.182Z",
                        "updatedAt": "2014-09-10T11:00:35.278Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_vietnam.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 855
                            },
                            "url": "img/flags/flag_vietnam.png"
                        },
                        "title": "Vietnam-Flag-24",
                        "description": "Vietnam-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "7At4015aDuMyEe6MsiousY",
                "revision": 2,
                "createdAt": "2014-08-12T14:23:12.346Z",
                "updatedAt": "2014-08-13T10:38:26.147Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Spain",
                "name": "Spain",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "2oAWUUxCo8eIwKy6yQCQmk",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:22:54.217Z",
                            "updatedAt": "2014-08-12T14:22:54.217Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Madrid",
                            "name": "Madrid",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    },
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "64UWTLQEmIgeAK8giC6aqM",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:23:08.731Z",
                            "updatedAt": "2014-08-12T14:23:08.731Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Barcelona",
                            "name": "Barcelona",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "573xXyOOXKyaC4Os6uaGiQ",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:38:22.133Z",
                        "updatedAt": "2014-09-10T11:02:00.389Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_spain.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 915
                            },
                            "url": "img/flags/flag_spain.png"
                        },
                        "title": "Spain-Flag-24",
                        "description": "Spain-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "682k4a0ZHOGo64GywMyU0S",
                "revision": 2,
                "createdAt": "2014-08-12T14:25:21.887Z",
                "updatedAt": "2014-08-13T10:39:37.991Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Thailand",
                "name": "Thailand",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "2OZTIYrBHOIoIMyycGOEoY",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:25:18.952Z",
                            "updatedAt": "2014-08-12T14:25:18.952Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Bangkok",
                            "name": "Bangkok",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "4BKRMHpikgQ640cS0Kq4kU",
                                    "revision": 3,
                                    "createdAt": "2014-07-28T11:04:42.497Z",
                                    "updatedAt": "2014-09-22T15:59:23.006Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler SN",
                                    "name": "Netscaler Asia",
                                    "dataCentre": "Asia",
                                    "urlEndpoint": "https://SN1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Qu8JVMbleW8Us6cOqOA2u",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:09:38.031Z",
                                                "updatedAt": "2014-08-05T09:09:38.031Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "title": "ReceiverConfig.cr(SN1)",
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                                }
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/AndroidConfigFiles/SN1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(SN1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "4k1lhvo4X6y8kYGY8iCowu",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:29:09.637Z",
                                                "updatedAt": "2014-08-06T09:29:09.638Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "3HxCKmGV0kkyccKUasQSmI",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:39:33.054Z",
                        "updatedAt": "2014-09-10T11:00:07.103Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_thailand.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 872
                            },
                            "url": "img/flags/flag_thailand.png"
                        },
                        "title": "Thailand-Flag-24",
                        "description": "Thailand-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "2N4ZMgaMBWYuWGW6yY22O2",
                "revision": 2,
                "createdAt": "2014-08-12T14:29:43.649Z",
                "updatedAt": "2014-08-13T10:40:02.924Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Brazil",
                "name": "Brazil",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "50AJi32BdeequAO0oqmS8c",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:29:40.167Z",
                            "updatedAt": "2014-08-12T14:29:40.167Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "São Paulo",
                            "name": "São Paulo",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "4Ven5PrWY8uas0qSO86A08",
                                    "revision": 2,
                                    "createdAt": "2014-08-12T14:27:25.269Z",
                                    "updatedAt": "2014-09-22T15:56:31.400Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler US",
                                    "name": "Netscaler US1",
                                    "dataCentre": "US",
                                    "urlEndpoint": "https://us1.myallenovery.net/vpn/index.html",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "3rgtc6CKlGegUWu0cOM6oe",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:26:50.351Z",
                                                "updatedAt": "2014-08-12T14:26:50.351Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/US/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig(US1)",
                                                "description": "ReceiverConfig(US1)"
                                            }
                                        },
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "S0xilt0Uik8G4m8SEi2sU",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:27:19.181Z",
                                                "updatedAt": "2014-08-12T14:27:19.181Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/US/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(US1 Android .xml)",
                                                "description": "ReceiverConfig(US1 Android .xml)"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/US/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "10loFoGEGIgKOemOqwMeOG",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:39:59.794Z",
                        "updatedAt": "2014-09-10T10:59:27.678Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_brazil.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 1224
                            },
                            "url": "img/flags/flag_brazil.png"
                        },
                        "title": "Brazil-Flag-24",
                        "description": "Brazil-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "fEfo7JcmOW8oCIGQsG2Kk",
                "revision": 2,
                "createdAt": "2014-08-12T14:23:43.610Z",
                "updatedAt": "2014-08-13T10:38:50.450Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Turkey",
                "name": "Turkey",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "4abZM4hV7WkmcAKICY2mE2",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:23:40.193Z",
                            "updatedAt": "2014-08-12T14:23:40.193Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Istanbul",
                            "name": "Istanbul",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "3g1PLojineyWgE2OM8ikwa",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:38:47.330Z",
                        "updatedAt": "2014-09-10T11:01:04.116Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_turkey.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 990
                            },
                            "url": "img/flags/flag_turkey.png"
                        },
                        "title": "Turkey-Flag-24",
                        "description": "Turkey-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "6KYvgBjC3S0ow22akyKOuu",
                "revision": 2,
                "createdAt": "2014-08-12T14:31:27.227Z",
                "updatedAt": "2014-08-13T10:43:50.059Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Indonesia",
                "name": "Indonesia",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "2EojzwgLEMSYskk8cqaUww",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:31:24.582Z",
                            "updatedAt": "2014-08-12T14:31:24.582Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Jakarta",
                            "name": "Jakarta",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "4BKRMHpikgQ640cS0Kq4kU",
                                    "revision": 3,
                                    "createdAt": "2014-07-28T11:04:42.497Z",
                                    "updatedAt": "2014-09-22T15:59:23.006Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler SN",
                                    "name": "Netscaler Asia",
                                    "dataCentre": "Asia",
                                    "urlEndpoint": "https://SN1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Qu8JVMbleW8Us6cOqOA2u",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:09:38.031Z",
                                                "updatedAt": "2014-08-05T09:09:38.031Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "title": "ReceiverConfig.cr(SN1)",
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                                }
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/AndroidConfigFiles/SN1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(SN1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "4k1lhvo4X6y8kYGY8iCowu",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:29:09.637Z",
                                                "updatedAt": "2014-08-06T09:29:09.638Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "4sM3SP8fkcwq0SMAsyAQ2K",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:43:45.324Z",
                        "updatedAt": "2014-09-04T13:33:36.040Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_indonesia.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 759
                            },
                            "url": "img/flags/flag_indonesia.png"
                        },
                        "title": "Indonesia-Flag-24",
                        "description": "Indonesia-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "z26ctm5nu8iAKqWAoeyKe",
                "revision": 2,
                "createdAt": "2014-08-12T14:30:15.144Z",
                "updatedAt": "2014-08-13T10:42:57.914Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Canada",
                "name": "Canada",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "4V5j5vhu1Ou8aOkAYq68GM",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:30:09.538Z",
                            "updatedAt": "2014-08-12T14:30:09.538Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Toronto",
                            "name": "Toronto",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "4Ven5PrWY8uas0qSO86A08",
                                    "revision": 2,
                                    "createdAt": "2014-08-12T14:27:25.269Z",
                                    "updatedAt": "2014-09-22T15:56:31.400Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler US",
                                    "name": "Netscaler US1",
                                    "dataCentre": "US",
                                    "urlEndpoint": "https://us1.myallenovery.net/vpn/index.html",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "3rgtc6CKlGegUWu0cOM6oe",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:26:50.351Z",
                                                "updatedAt": "2014-08-12T14:26:50.351Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/US/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig(US1)",
                                                "description": "ReceiverConfig(US1)"
                                            }
                                        },
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "S0xilt0Uik8G4m8SEi2sU",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:27:19.181Z",
                                                "updatedAt": "2014-08-12T14:27:19.181Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/US/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(US1 Android .xml)",
                                                "description": "ReceiverConfig(US1 Android .xml)"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/US/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "dieVG6j0T62sW2IGo4oWM",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:42:55.055Z",
                        "updatedAt": "2014-09-10T10:58:59.507Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_canada.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 1078
                            },
                            "url": "img/flags/flag_canada.png"
                        },
                        "title": "Canada-Flag-24",
                        "description": "Canada-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "329Ew78Cogim6qGqMQ0goE",
                "revision": 2,
                "createdAt": "2014-08-12T14:31:56.122Z",
                "updatedAt": "2014-08-13T10:44:08.535Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "China",
                "name": "China",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "XfFGbNXCU0YGwmi0uCKKM",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:31:53.480Z",
                            "updatedAt": "2014-08-12T14:31:53.480Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Beijing",
                            "name": "Beijing",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "5ZpAdaYNJ6kUsGYuwqugoE",
                                    "revision": 3,
                                    "createdAt": "2014-08-12T14:29:01.763Z",
                                    "updatedAt": "2014-09-22T16:02:23.684Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler HK",
                                    "name": "Netscaler HK1",
                                    "dataCentre": "HK",
                                    "urlEndpoint": "https://hk1.myallenovery.net/vpn/index.html",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "EIKMR4g2OW4YOYuiWiy8C",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:28:31.358Z",
                                                "updatedAt": "2014-08-12T14:28:31.358Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 797
                                                    },
                                                    "url": "config/IosConfigFiles/US/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig(HK1)",
                                                "description": "ReceiverConfig(HK1)"
                                            }
                                        },
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "2YRqPTKIree40kiQ4u6yc2",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:28:57.664Z",
                                                "updatedAt": "2014-08-12T14:28:57.664Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 797
                                                    },
                                                    "url": "config/AndroidConfigFiles/US/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(HK1 Android .xml)",
                                                "description": "ReceiverConfig(HK1 Android .xml)"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/US/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "1wZz4rW7KoKs24SeEEaIY6",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:44:05.711Z",
                        "updatedAt": "2014-09-10T10:57:18.237Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_china.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 809
                            },
                            "url": "img/flags/flag_china.png"
                        },
                        "title": "China-Flag-24",
                        "description": "China-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "s2cfv1NWc8QQOGeQ4SOOm",
                "revision": 2,
                "createdAt": "2014-08-12T14:30:52.001Z",
                "updatedAt": "2014-08-13T10:43:26.558Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "USA",
                "name": "USA",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "5iyXdQ5aww404qm8auwysS",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:30:48.565Z",
                            "updatedAt": "2014-08-12T14:30:48.565Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "New York",
                            "name": "New York",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "4Ven5PrWY8uas0qSO86A08",
                                    "revision": 2,
                                    "createdAt": "2014-08-12T14:27:25.269Z",
                                    "updatedAt": "2014-09-22T15:56:31.400Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler US",
                                    "name": "Netscaler US1",
                                    "dataCentre": "US",
                                    "urlEndpoint": "https://us1.myallenovery.net/vpn/index.html",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "3rgtc6CKlGegUWu0cOM6oe",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:26:50.351Z",
                                                "updatedAt": "2014-08-12T14:26:50.351Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/US/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig(US1)",
                                                "description": "ReceiverConfig(US1)"
                                            }
                                        },
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "S0xilt0Uik8G4m8SEi2sU",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:27:19.181Z",
                                                "updatedAt": "2014-08-12T14:27:19.181Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/US/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(US1 Android .xml)",
                                                "description": "ReceiverConfig(US1 Android .xml)"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/US/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "3WJzwMWbqEwAE4uUMYUEyI",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:43:18.314Z",
                        "updatedAt": "2014-09-10T10:58:23.458Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_usa.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 1167
                            },
                            "url": "img/flags/flag_usa.png"
                        },
                        "title": "United-States-Flag-24",
                        "description": "United-States-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "7nLIiXH3wW6qIMAuWCeQY8",
                "revision": 2,
                "createdAt": "2014-08-12T14:32:19.129Z",
                "updatedAt": "2014-08-13T10:45:34.619Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Hong Kong",
                "name": "Hong Kong",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "1D3BzeBnyYm8moMeWUkAGg",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:32:16.405Z",
                            "updatedAt": "2014-08-12T14:32:16.405Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Hong Kong",
                            "name": "Hong Kong",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "5ZpAdaYNJ6kUsGYuwqugoE",
                                    "revision": 3,
                                    "createdAt": "2014-08-12T14:29:01.763Z",
                                    "updatedAt": "2014-09-22T16:02:23.684Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler HK",
                                    "name": "Netscaler HK1",
                                    "dataCentre": "HK",
                                    "urlEndpoint": "https://hk1.myallenovery.net/vpn/index.html",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "EIKMR4g2OW4YOYuiWiy8C",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:28:31.358Z",
                                                "updatedAt": "2014-08-12T14:28:31.358Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 797
                                                    },
                                                    "url": "config/IosConfigFiles/HK1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig(HK1)",
                                                "description": "ReceiverConfig(HK1)"
                                            }
                                        },
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "2YRqPTKIree40kiQ4u6yc2",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:28:57.664Z",
                                                "updatedAt": "2014-08-12T14:28:57.664Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 797
                                                    },
                                                    "url": "config/AndroidConfigFiles/HK1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(HK1 Android .xml)",
                                                "description": "ReceiverConfig(HK1 Android .xml)"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/HK1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "1BjflVHqp6A4YGMGi6S4iE",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:45:30.781Z",
                        "updatedAt": "2014-09-04T13:32:13.986Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_hong_kong.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 1141
                            },
                            "url": "img/flags/flag_hong_kong.png"
                        },
                        "title": "Hong kong-Flag-24",
                        "description": "Hong kong-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "2JgO6XHTvOiOAWYmg2uOYq",
                "revision": 2,
                "createdAt": "2014-08-12T14:32:45.100Z",
                "updatedAt": "2014-08-13T10:45:56.235Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Japan",
                "name": "Japan",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "5fa6WictgWAWosQ2yc6m6q",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:32:42.831Z",
                            "updatedAt": "2014-08-12T14:32:42.831Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Tokyo",
                            "name": "Tokyo",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "5ZpAdaYNJ6kUsGYuwqugoE",
                                    "revision": 3,
                                    "createdAt": "2014-08-12T14:29:01.763Z",
                                    "updatedAt": "2014-09-22T16:02:23.684Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler HK",
                                    "name": "Netscaler HK1",
                                    "dataCentre": "HK",
                                    "urlEndpoint": "https://hk1.myallenovery.net/vpn/index.html",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "EIKMR4g2OW4YOYuiWiy8C",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:28:31.358Z",
                                                "updatedAt": "2014-08-12T14:28:31.358Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 797
                                                    },
                                                    "url": "config/IosConfigFiles/HK1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig(HK1)",
                                                "description": "ReceiverConfig(HK1)"
                                            }
                                        },
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "2YRqPTKIree40kiQ4u6yc2",
                                                "revision": 1,
                                                "createdAt": "2014-08-12T14:28:57.664Z",
                                                "updatedAt": "2014-08-12T14:28:57.664Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 797
                                                    },
                                                    "url": "config/AndroidConfigFiles/HK1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(HK1 Android .xml)",
                                                "description": "ReceiverConfig(HK1 Android .xml)"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/HK1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "4nfKMLp97iwCscocIcSAQw",
                        "revision": 2,
                        "createdAt": "2014-08-13T10:45:52.370Z",
                        "updatedAt": "2014-09-04T13:26:18.343Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_japan.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 844
                            },
                            "url": "img/flags/flag_japan.png"
                        },
                        "title": "Japan-Flag-24",
                        "description": "Japan-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "6fyu4RlVgk8MwYsmO80K6G",
                "revision": 3,
                "createdAt": "2014-08-12T14:33:20.472Z",
                "updatedAt": "2014-09-04T13:12:01.462Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Morocco",
                "name": "Morocco",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "MDZTelmgma6kI8eGMgYKU",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:33:08.149Z",
                            "updatedAt": "2014-08-12T14:33:08.149Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Casablanca",
                            "name": "Casablanca",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "1rCBd7ruPCysWCQOmwiky8",
                                    "revision": 6,
                                    "createdAt": "2014-07-18T10:17:08.629Z",
                                    "updatedAt": "2014-09-22T15:58:37.521Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler EU",
                                    "name": "Netscaler 1",
                                    "dataCentre": "EU",
                                    "urlEndpoint": "https://EU1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "26hSmn1ZdOCe6oaeqKmimi",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:11:32.088Z",
                                                "updatedAt": "2014-08-05T09:11:32.088Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                                },
                                                "title": "ReceiverConfig.cr(EU1)"
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 798
                                                    },
                                                    "url": "config/AndroidConfigFiles/EU1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(EU1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Um5Wi09Ogmk0m80iu8Ais",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:28:39.517Z",
                                                "updatedAt": "2014-08-06T09:28:39.517Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/EU1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "6VtFCMQppYIyywgK8gaGqk",
                        "revision": 2,
                        "createdAt": "2014-09-04T13:11:57.066Z",
                        "updatedAt": "2014-09-04T13:13:17.517Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_morocco.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 913
                            },
                            "url": "img/flags/flag_morocco.png"
                        },
                        "title": "Morocco-Flag-24",
                        "description": "Morocco-Flag-24"
                    }
                }
            }
        },
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8u2cofzt5au2"
                    }
                },
                "type": "Entry",
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "1VDCuxRHJG6yGogsiKaMSW"
                    }
                },
                "id": "180IiNHQSeiUGKgSAqyiee",
                "revision": 3,
                "createdAt": "2014-08-12T14:33:46.483Z",
                "updatedAt": "2014-09-04T13:25:25.613Z",
                "locale": "en-US"
            },
            "fields": {
                "title": "Myanmar",
                "name": "Myanmar",
                "office": [
                    {
                        "sys": {
                            "space": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "Space",
                                    "id": "8u2cofzt5au2"
                                }
                            },
                            "type": "Entry",
                            "contentType": {
                                "sys": {
                                    "type": "Link",
                                    "linkType": "ContentType",
                                    "id": "1MCry9Q5JiSwEeeKECW8as"
                                }
                            },
                            "id": "AJ8apQj5rqsSkKKMiqm8M",
                            "revision": 1,
                            "createdAt": "2014-08-12T14:33:42.007Z",
                            "updatedAt": "2014-08-12T14:33:42.007Z",
                            "locale": "en-US"
                        },
                        "fields": {
                            "title": "Yangon",
                            "name": "Yangon",
                            "netscaler": {
                                "sys": {
                                    "space": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "Space",
                                            "id": "8u2cofzt5au2"
                                        }
                                    },
                                    "type": "Entry",
                                    "contentType": {
                                        "sys": {
                                            "type": "Link",
                                            "linkType": "ContentType",
                                            "id": "1AkLOJgbCIQs0OW44y8Ykq"
                                        }
                                    },
                                    "id": "4BKRMHpikgQ640cS0Kq4kU",
                                    "revision": 3,
                                    "createdAt": "2014-07-28T11:04:42.497Z",
                                    "updatedAt": "2014-09-22T15:59:23.006Z",
                                    "locale": "en-US"
                                },
                                "fields": {
                                    "title": "Netscaler SN",
                                    "name": "Netscaler Asia",
                                    "dataCentre": "Asia",
                                    "urlEndpoint": "https://SN1.myallenovery.net",
                                    "config": [
                                        {
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "5Qu8JVMbleW8Us6cOqOA2u",
                                                "revision": 1,
                                                "createdAt": "2014-08-05T09:09:38.031Z",
                                                "updatedAt": "2014-08-05T09:09:38.031Z",
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "title": "ReceiverConfig.cr(SN1)",
                                                "file": {
                                                    "fileName": "ReceiverConfig.cr",
                                                    "contentType": "application/octet-stream",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                                }
                                            }
                                        },
                                        {
                                            "fields": {
                                                "file": {
                                                    "fileName": "ReceiverConfig.xml",
                                                    "contentType": "text/xml",
                                                    "details": {
                                                        "size": 796
                                                    },
                                                    "url": "config/AndroidConfigFiles/SN1/ReceiverConfig.xml"
                                                },
                                                "title": "ReceiverConfig(SN1- Android .xml)"
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8u2cofzt5au2"
                                                    }
                                                },
                                                "type": "Asset",
                                                "id": "4k1lhvo4X6y8kYGY8iCowu",
                                                "revision": 1,
                                                "createdAt": "2014-08-06T09:29:09.637Z",
                                                "updatedAt": "2014-08-06T09:29:09.638Z",
                                                "locale": "en-US"
                                            }
                                        }
                                    ],
                                    "iosConfigUrl": "config/IosConfigFiles/SN1/ReceiverConfig.cr"
                                }
                            }
                        }
                    }
                ],
                "flag": {
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8u2cofzt5au2"
                            }
                        },
                        "type": "Asset",
                        "id": "2MWgXMKPjqq0aeQ4msOOMY",
                        "revision": 1,
                        "createdAt": "2014-09-04T13:24:54.518Z",
                        "updatedAt": "2014-09-04T13:24:54.519Z",
                        "locale": "en-US"
                    },
                    "fields": {
                        "file": {
                            "fileName": "flag_burma.png",
                            "contentType": "image/png",
                            "details": {
                                "image": {
                                    "width": 24,
                                    "height": 24
                                },
                                "size": 980
                            },
                            "url": "img/flags/flag_myannmar.png"
                        },
                        "title": "Myanmar-Flag-24",
                        "description": "Myanmar-Flag-24"
                    }
                }
            }
        }
    ]
});




