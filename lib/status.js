var status = {};

status.NETWORK = {};
status.NETWORK.arp = {
    "00:16:3e:00:00:06": {
        "raw": "dev ap1 lladdr 00:16:3e:00:00:06 PERMANENT",
        "Address": "dev",
        "Mac": "00:16:3e:00:00:06",
        "NUD": 66
    },
    "20:76:93:23:a6:c8": {
        "raw": "192.168.99.1 dev eth2 lladdr 20:76:93:23:a6:c8 REACHABLE",
        "Address": "192.168.99.1",
        "Dev": "eth2",
        "Mac": "20:76:93:23:a6:c8",
        "NUD": 16
    },
    "6e:e2:0e:68:6a:fe": {
        "raw": "dev host_4108 lladdr 6e:e2:0e:68:6a:fe PERMANENT",
        "Address": "dev",
        "Mac": "6e:e2:0e:68:6a:fe",
        "NUD": 66
    },
    "b6:b5:5d:7a:6b:1d": {
        "raw": "fe80::b4b5:5dff:fe7a:6b1d dev VETH lladdr b6:b5:5d:7a:6b:1d STALE",
        "Address": "fe80::b4b5:5dff:fe7a:6b1d",
        "Dev": "veth",
        "Mac": "b6:b5:5d:7a:6b:1d",
        "NUD": 17
    },
    "ae:29:2e:8b:7b:2a": {
        "raw": "fe80::ac29:2eff:fe8b:7b2a dev VETH lladdr ae:29:2e:8b:7b:2a STALE",
        "Address": "fe80::ac29:2eff:fe8b:7b2a",
        "Dev": "veth",
        "Mac": "ae:29:2e:8b:7b:2a",
        "NUD": 17
    },
    "ea:71:f8:17:38:34": {
        "raw": "dev host_4104 lladdr ea:71:f8:17:38:34 PERMANENT",
        "Address": "dev",
        "Mac": "ea:71:f8:17:38:34",
        "NUD": 66
    },
    "88:63:df:a0:d7:03": {
        "raw": "192.168.99.171 dev eth2 lladdr 88:63:df:a0:d7:03 REACHABLE",
        "Address": "192.168.99.171",
        "Dev": "eth2",
        "Mac": "88:63:df:a0:d7:03",
        "NUD": 16
    },
    "00:13:ef:c0:13:48": {
        "raw": "192.168.99.192 dev eth2 lladdr 00:13:ef:c0:13:48 STALE",
        "Address": "192.168.99.192",
        "Dev": "eth2",
        "Mac": "00:13:ef:c0:13:48",
        "NUD": 17
    },
    "70:14:a6:63:d6:07": {
        "raw": "fe80::10ee:d75:c427:8e3e dev eth2 lladdr 70:14:a6:63:d6:07 STALE",
        "Address": "fe80::10ee:d75:c427:8e3e",
        "Dev": "eth2",
        "Mac": "70:14:a6:63:d6:07",
        "NUD": 17
    },
    "28:b2:bd:78:8d:95": {
        "raw": "192.168.99.139 dev eth2 lladdr 28:b2:bd:78:8d:95 STALE",
        "Address": "192.168.99.139",
        "Dev": "eth2",
        "Mac": "28:b2:bd:78:8d:95",
        "NUD": 17
    }
};
status.NETWORK.leases = {
    "60:d9:c7:41:d4:71": {
        "Mac": "60:d9:c7:41:d4:71",
        "Address": "192.168.66.10",
        "Hostname": "ye-de-iPhone",
        "VendorClass": "",
        "Interface": "br0"
    }
};
status.NETWORK.network = {
    "config": {
        "NetworkName": "edge-1",
        "RouterIP": "192.168.66.1",
        "LocalNetmask": 24,
        "Uplink": "eth2",
        "DropIncomingRequests": {
            "Interface": "eth2"
        },
        "NetworkAddress": "192.168.66.1/24"
    }
};
status.NETWORK.mdns = {
    "192.168.66.10": {}
};
status.NETWORK.ssdp = {
    "192.168.99.116": {
        "CACHE-CONTROL": "max-age=1810",
        "DATE": "Mon, 10 Aug 2015 03:16:42 GMT",
        "ST": "urn:microsoft.com:service:X_MS_MediaReceiverRegistrar:1",
        "USN": "uuid:4d696e69-444c-164e-9d41-00049f0203ab::urn:microsoft.com:service:X_MS_MediaReceiverRegistrar:1",
        "EXT": "",
        "SERVER": "3.13.0-24-generic DLNADOC/1.50 UPnP/1.0 MiniDLNA/1.1.4",
        "LOCATION": "http://192.168.99.116:8200/rootDesc.xml",
        "CONTENT-LENGTH": "0"
    },
    "192.168.99.1": {
        "CACHE-CONTROL": "max-age=120",
        "ST": "uuid:ac386e07-397a-4dcc-862f-4f883fff9542",
        "USN": "uuid:ac386e07-397a-4dcc-862f-4f883fff9542",
        "EXT": "",
        "SERVER": "OpenWRT/OpenWrt/Attitude_Adjustment__r27418_ UPnP/1.1 MiniUPnPd/1.8",
        "LOCATION": "http://192.168.99.1:5000/rootDesc.xml",
        "OPT": "\"http://schemas.upnp.org/upnp/1/0/\"; ns=01",
        "01-NLS": "1",
        "BOOTID.UPNP.ORG": "1",
        "CONFIGID.UPNP.ORG": "1337"
    }
};
status.NETWORK.p0f = {};
status.NETWORK.link = {
    "ap1": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1,
            "UP": 1,
            "LOWER_UP": 1
        },
        "Id": "51",
        "Dev": "ap1",
        "State": "UP",
        "Mac": "00:16:3e:00:00:06",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "br0": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1,
            "UP": 1,
            "LOWER_UP": 1
        },
        "Id": "54",
        "Dev": "br0",
        "State": "UP",
        "Mac": "00:16:3e:00:00:06",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "lo": {
        "Status": {
            "LOOPBACK": 1,
            "UP": 1,
            "LOWER_UP": 1
        },
        "Id": "1",
        "Dev": "lo",
        "State": "UNKNOWN",
        "MacMask": "00:00:00:00:00:00"
    },
    "eth0": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1
        },
        "Id": "2",
        "Dev": "eth0",
        "State": "DOWN",
        "Mac": "00:04:9f:02:03:ab",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "eth1": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1
        },
        "Id": "3",
        "Dev": "eth1",
        "State": "DOWN",
        "Mac": "00:04:9f:02:03:ac",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "eth2": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1,
            "UP": 1,
            "LOWER_UP": 1
        },
        "Id": "4",
        "Dev": "eth2",
        "State": "UP",
        "Mac": "00:04:9f:02:03:aa",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "sit0": {
        "Status": {
            "NOARP": 1
        },
        "Id": "5",
        "Dev": "sit0",
        "State": "DOWN",
        "MacMask": "0.0.0.0"
    },
    "wlp1s0": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1
        },
        "Id": "6",
        "Dev": "wlp1s0",
        "State": "DOWN",
        "Mac": "00:03:7f:00:00:00",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "wlP1p1s0": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1
        },
        "Id": "7",
        "Dev": "wlP1p1s0",
        "State": "DOWN",
        "Mac": "00:03:7f:4a:64:d2",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "VETH": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1,
            "UP": 1,
            "LOWER_UP": 1
        },
        "Id": "8",
        "Dev": "VETH",
        "State": "UP",
        "Mac": "6e:e2:0e:68:6a:fe",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "ap0": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1
        },
        "Id": "50",
        "Dev": "ap0",
        "State": "DOWN",
        "Mac": "00:16:3e:00:00:05",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "guset0": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1
        },
        "Id": "52",
        "Dev": "guset0",
        "State": "DOWN",
        "Mac": "00:03:7f:00:00:00",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "guset1": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1
        },
        "Id": "53",
        "Dev": "guset1",
        "State": "DOWN",
        "Mac": "00:03:7f:4a:64:d2",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "host_4104": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1,
            "UP": 1,
            "LOWER_UP": 1
        },
        "Id": "56",
        "Dev": "host_4104",
        "State": "UP",
        "Mac": "ea:71:f8:17:38:34",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    },
    "host_4108": {
        "Status": {
            "BROADCAST": 1,
            "MULTICAST": 1,
            "UP": 1,
            "LOWER_UP": 1
        },
        "Id": "58",
        "Dev": "host_4108",
        "State": "UP",
        "Mac": "6e:e2:0e:68:6a:fe",
        "MacMask": "ff:ff:ff:ff:ff:ff"
    }
};
status.NETWORK.addr = {
    "eth2": {
        "0": {
            "Prefix": "64",
            "Address": "fe80::204:9fff:fe02:3aa"
        }
    },
    "br0": {
        "0": {
            "Prefix": "64",
            "Address": "fe80::7ca1:21ff:fe91:6956"
        }
    },
    "lo": {
        "0": {
            "Prefix": "8",
            "Address": "127.0.0.1"
        },
        "1": {
            "Prefix": "128",
            "Address": "::1"
        }
    },
    "eth0": {},
    "eth1": {},
    "sit0": {},
    "wlp1s0": {},
    "wlP1p1s0": {},
    "VETH": {
        "0": {
            "Prefix": "16",
            "Address": "172.16.0.1"
        },
        "1": {
            "Prefix": "64",
            "Address": "fe80::d03c:f3ff:fe11:207e"
        }
    },
    "ap0": {},
    "ap1": {
        "0": {
            "Address": "fe80::216:3eff:fe00:6",
            "Prefix": "64"
        }
    },
    "guset0": {},
    "guset1": {},
    "host_4104": {
        "0": {
            "Address": "fe80::e871:f8ff:fe17:3834",
            "Prefix": "64"
        }
    },
    "host_4108": {
        "0": {
            "Address": "fe80::6ce2:eff:fe68:6afe",
            "Prefix": "64"
        }
    }
};

status.WLAN2G = {};
status.WLAN2G.stations = {
    "60:d9:c7:41:d4:71": {
        "ap": "ap1",
        "LastMeasure": 1439193233042,
        "inactive_time": 350,
        "rx_bytes": 1626,
        "rx_packets": 14,
        "tx_bytes": 0,
        "tx_packets": 0,
        "tx_retries": 0,
        "tx_failed": 0,
        "signal": -77,
        "signal_avg": -79,
        "tx_bitrate": "1.0MBits",
        "rx_bitrate": "19.5MBitsMCS2",
        "authorized": true,
        "authenticated": true,
        "preamble": "short",
        "WMMWME": true,
        "MFP": false,
        "TDLS_peer": false
    }
};
status.WLAN2G.devices = {
    "60:d9:c7:41:d4:71": true
};

status.WLAN5G = {};
status.WLAN5G.stations = {};
status.WLAN5G.devices = {};

status.TRAFFIC = {};
status.TRAFFIC.traffics = {
    "60:d9:c7:41:d4:71": {
        "IP": "192.168.66.10",
        "internet_up_traffic": {
            "Bytes": 2000,
            "Packets": 50,
            "LastMeasure": 1439193445935,
            "Delta_Packets": 1,
            "Delta_Bytes": 40,
            "Delta_Time": 5055
        },
        "internet_down_traffic": {
            "Bytes": 0,
            "Packets": 0
        },
        "intranet_up_traffic": {
            "Bytes": 0,
            "Packets": 0
        },
        "intranet_down_traffic": {
            "Bytes": 0,
            "Packets": 0
        }
    }
};

module.exports.status = status;

var devices = {
    "bus": {
        "name": "WIFI",
        "stamp": 1439193228365,
        "hwaddr": "60:d9:c7:41:d4:71",
        "data": {
            "Addr": {
                "raw": "192.168.66.10 dev br0 lladdr 60:d9:c7:41:d4:71 REACHABLE",
                "Address": "192.168.66.10",
                "Dev": "br0",
                "Mac": "60:d9:c7:41:d4:71",
                "NUD": 16
            },
            "Lease": {
                "Mac": "60:d9:c7:41:d4:71",
                "Address": "192.168.66.10",
                "Hostname": "ye-de-iPhone",
                "VendorClass": "",
                "Interface": "br0"
            },
            "Wireless": {
                "ap": "ap1",
                "LastMeasure": 1439193233042,
                "inactive_time": 350,
                "rx_bytes": 1626,
                "rx_packets": 14,
                "tx_bytes": 0,
                "tx_packets": 0,
                "tx_retries": 0,
                "tx_failed": 0,
                "signal": -77,
                "signal_avg": -79,
                "tx_bitrate": "1.0MBits",
                "rx_bitrate": "19.5MBitsMCS2",
                "authorized": true,
                "authenticated": true,
                "preamble": "short",
                "WMMWME": true,
                "MFP": false,
                "TDLS_peer": false
            },
            "Traffic": {},
            "MDNS": {},
            "SSDP": {},
            "Band": "WLAN2G",
            "P0F": {}
        }
    },
    "assumptions": {
        "App_Launcher:OUI": {
            "actions": {},
            "attributes": {
                "vendor": "Apple"
            },
            "classes": {},
            "aux": {},
            "valid": true,
            "driverId": "App_Launcher:OUI"
        },
        "App_Launcher:NameService": {
            "valid": true,
            "attributes": {
                "name": "ye-de-iPhone"
            },
            "driverId": "App_Launcher:NameService",
            "actions": {},
            "classes": {}
        }
    },
    "id": "096073568f514348a8cbf39c3454669c",
    "config": {},
    "time": "2015-08-10T07:53:48.368Z",
    "state": 1,
    "owner": "",
    "version": null
};
module.exports.devices = devices;

var pooled = [
    {
        "Id": "Launcher",
        "App": {
            "uid": "Launcher"
        },
        "Status": {
            "Heartbeat": {
                "DeltaT": 1,
                "Sent": 1439193491443
            },
            "FailHistory": [

            ],
            "LaunchTime": 1439176620710,
            "PlannedLaunchTime": -1,
            "StabilityRating": 1,
            "State": 2,
            "IsLauncher": false,
            "AppUrl": "Launcher",
            "AppName": "Launcher",
            "MainSock": "/tmp/fdsock/f0d07e9d6b7841c199541bcf6045903a.t",
            "WebExSock": "/tmp/fdsock/a4c0b02430f84b33b4186a0e1bdc3d1b.t",
            "RuntimeId": "80d629af0d32421b9e1fd902dc064167",
            "Permission": [
                1
            ]
        }
    },
    {
        "Id": "Test",
        "App": {
            "uid": "Test"
        },
        "Status": {
            "Heartbeat": {
                "DeltaT": 1,
                "Sent": 1439193491443
            },
            "FailHistory": [

            ],
            "LaunchTime": 1439176618218,
            "PlannedLaunchTime": -1,
            "StabilityRating": 1,
            "State": 2,
            "IsLauncher": false,
            "AppUrl": "Airplay",
            "AppName": "Test",
            "MainSock": "/tmp/fdsock/0aa62da7a30d45f38cf63a2918cbd532.t",
            "WebExSock": "/tmp/fdsock/cff906193f384521a8ef5a29f5a49050.t",
            "RuntimeId": "c7502a2b9527452b88d22b86120ec1bb",
            "Permission": [
                1
            ]
        }
    }
];
module.exports.pooled = pooled;