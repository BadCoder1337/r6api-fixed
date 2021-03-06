const _ = require('lodash');

let operators = {
    "smoke-sas": {
        id: "smoke-sas",
        category: "def",
        index: "2",
        ctuIndex: "1",
        fullIndex: "2:1",
        heroStats: [
            "operatorpvp_smoke_poisongaskill",
            "operatorpve_smoke_poisongaskill"
        ]
    },
    "mute-sas": {
        id: "mute-sas",
        category: "def",
        index: "3",
        ctuIndex: "1",
        fullIndex: "3:1",
        heroStats: [
            "operatorpvp_mute_gadgetjammed",
            "operatorpve_mute_gadgetjammed"
        ]
    },
    "sledge-sas": {
        id: "sledge-sas",
        category: "atk",
        index: "4",
        ctuIndex: "1",
        fullIndex: "4:1",
        heroStats: [
            "operatorpvp_sledge_hammerhole",
            "operatorpve_sledge_hammerhole"
        ]
    },
    "thatcher-sas": {
        id: "thatcher-sas",
        category: "atk",
        index: "5",
        ctuIndex: "1",
        fullIndex: "5:1",
        heroStats: [
            "operatorpvp_thatcher_gadgetdestroywithemp",
            "operatorpve_thatcher_gadgetdestroywithemp"
        ]
    },
    "castle-fbi-swat": {
        id: "castle-fbi-swat",
        category: "def",
        index: "2",
        ctuIndex: "2",
        fullIndex: "2:2",
        heroStats: [
            "operatorpvp_castle_kevlarbarricadedeployed",
            "operatorpve_castle_kevlarbarricadedeployed"
        ]
    },
    "ash-fbi-swat": {
        id: "ash-fbi-swat",
        category: "atk",
        index: "3",
        ctuIndex: "2",
        fullIndex: "3:2",
        heroStats: [
            "operatorpvp_ash_bonfirewallbreached",
            "operatorpve_ash_bonfirewallbreached"
        ]
    },
    "pulse-fbi-swat": {
        id: "pulse-fbi-swat",
        category: "def",
        index: "4",
        ctuIndex: "2",
        fullIndex: "4:2",
        heroStats: [
            "operatorpvp_pulse_heartbeatspot",
            "operatorpve_pulse_heartbeatspot"
        ]
    },
    "thermite-fbi-swat": {
        id: "thermite-fbi-swat",
        category: "atk",
        index: "5",
        ctuIndex: "2",
        fullIndex: "5:2",
        heroStats: [
            "operatorpvp_thermite_reinforcementbreached",
            "operatorpve_thermite_reinforcementbreached"
        ]
    },
    "doc-gign": {
        id: "doc-gign",
        category: "def",
        index: "2",
        ctuIndex: "3",
        fullIndex: "2:3",
        heroStats: [
            "operatorpvp_doc_teammaterevive",
            "operatorpve_doc_teammaterevive"
        ]
    },
    "rook-gign": {
        id: "rook-gign",
        category: "def",
        index: "3",
        ctuIndex: "3",
        fullIndex: "3:3",
        heroStats: [
            "operatorpvp_rook_armortakenteammate",
            "operatorpve_rook_armortakenteammate"
        ]
    },
    "twitch-gign": {
        id: "twitch-gign",
        category: "atk",
        index: "4",
        ctuIndex: "3",
        fullIndex: "4:3",
        heroStats: [
            "operatorpve_twitch_gadgetdestroybyshockdrone",
            "operatorpvp_twitch_gadgetdestroybyshockdrone"
        ]
    },
    "montagne-gign": {
        id: "montagne-gign",
        category: "atk",
        index: "5",
        ctuIndex: "3",
        fullIndex: "5:3",
        heroStats: [
            "operatorpvp_montagne_shieldblockdamage",
            "operatorpve_montagne_shieldblockdamage"
        ]
    },
    "glaz-spetsnaz": {
        id: "glaz-spetsnaz",
        category: "atk",
        index: "2",
        ctuIndex: "4",
        fullIndex: "2:4",
        heroStats: [
            "operatorpvp_glaz_sniperkill",
            "operatorpve_glaz_sniperkill"
        ]
    },
    "fuze-spetsnaz": {
        id: "fuze-spetsnaz",
        category: "atk",
        index: "3",
        ctuIndex: "4",
        fullIndex: "3:4",
        heroStats: [
            "operatorpvp_fuze_clusterchargekill",
            "operatorpve_fuze_clusterchargekill"
        ]
    },
    "kapkan-spetsnaz": {
        id: "kapkan-spetsnaz",
        category: "def",
        index: "4",
        ctuIndex: "4",
        fullIndex: "4:4",
        heroStats: [
            "operatorpvp_kapkan_boobytrapkill",
            "operatorpve_kapkan_boobytrapkill"
        ]
    },
    "tachanka-spetsnaz": {
        id: "tachanka-spetsnaz",
        category: "def",
        index: "5",
        ctuIndex: "4",
        fullIndex: "5:4",
        heroStats: [
            "operatorpvp_tachanka_turretkill",
            "operatorpve_tachanka_turretkill"
        ]
    },
    "blitz-gsg-9": {
        id: "blitz-gsg-9",
        category: "atk",
        index: "2",
        ctuIndex: "5",
        fullIndex: "2:5",
        heroStats: [
            "operatorpvp_blitz_flashedenemy",
            "operatorpve_blitz_flashedenemy"
        ]
    },
    "iq-gsg-9": {
        id: "iq-gsg-9",
        category: "atk",
        index: "3",
        ctuIndex: "5",
        fullIndex: "3:5",
        heroStats: [
            "operatorpvp_iq_gadgetspotbyef",
            "operatorpve_iq_gadgetspotbyef"
        ]
    },
    "jager-gsg-9": {
        id: "jager-gsg-9",
        category: "def",
        index: "4",
        ctuIndex: "5",
        fullIndex: "4:5",
        heroStats: [
            "operatorpvp_jager_gadgetdestroybycatcher",
            "operatorpve_jager_gadgetdestroybycatcher"
        ]
    },
    "bandit-gsg-9": {
        id: "bandit-gsg-9",
        category: "def",
        index: "5",
        ctuIndex: "5",
        fullIndex: "5:5",
        heroStats: [
            "operatorpvp_bandit_batterykill",
            "operatorpve_bandit_batterykill"
        ]
    },
    "buck-jtf2": {
        id: "buck-jtf2",
        category: "atk",
        index: "2",
        ctuIndex: "6",
        fullIndex: "2:6",
        heroStats: [
            "operatorpvp_buck_kill",
            "operatorpve_buck_kill"
        ]
    },
    "frost-jtf2": {
        id: "frost-jtf2",
        category: "def",
        index: "3",
        ctuIndex: "6",
        fullIndex: "3:6",
        heroStats: [
            "operatorpvp_frost_dbno",
            "operatorpve_frost_beartrap_kill"
        ]
    },
    "blackbeard-navy-seal": {
        id: "blackbeard-navy-seal",
        category: "atk",
        index: "2",
        ctuIndex: "7",
        fullIndex: "2:7",
        heroStats: [
            "operatorpvp_blackbeard_gunshieldblockdamage",
            "operatorpve_blackbeard_gunshieldblockdamage"
        ]
    },
    "valkyrie-navy-seal": {
        id: "valkyrie-navy-seal",
        category: "def",
        index: "3",
        ctuIndex: "7",
        fullIndex: "3:7",
        heroStats: [
            "operatorpvp_valkyrie_camdeployed",
            "operatorpve_valkyrie_camdeployed"
        ]
    },
    "capitao-bope": {
        id: "capitao-bope",
        category: "atk",
        index: "2",
        ctuIndex: "8",
        fullIndex: "2:8",
        heroStats: [
            "operatorpvp_capitao_lethaldartkills",
            "operatorpve_capitao_lethaldartkills"
        ]
    },
    "caveira-bope": {
        id: "caveira-bope",
        category: "def",
        index: "3",
        ctuIndex: "8",
        fullIndex: "3:8",
        heroStats: [
            "operatorpvp_caveira_interrogations",
            "operatorpve_caveira_aikilledinstealth"
        ]
    },
    "hibana-sat": {
        id: "hibana-sat",
        category: "atk",
        index: "2",
        ctuIndex: "9",
        fullIndex: "2:9",
        heroStats: [
            "operatorpvp_hibana_detonate_projectile",
            "operatorpve_hibana_detonate_projectile"
        ]
    },
    "echo-sat": {
        id: "echo-sat",
        category: "def",
        index: "3",
        ctuIndex: "9",
        fullIndex: "3:9",
        heroStats: [
            "operatorpvp_echo_enemy_sonicburst_affected",
            "operatorpve_echo_enemy_sonicburst_affected"
        ]
    },
    "jackal-geo": {
        id: "jackal-geo",
        category: "atk",
        index: "2",
        ctuIndex: "A",
        fullIndex: "2:A",
        heroStats: [
            "operatorpvp_cazador_assist_kill",
            "operatorpve_cazador_assist_kill"
        ]
    },
    "mira-geo": {
        id: "mira-geo",
        category: "def",
        index: "3",
        ctuIndex: "A",
        fullIndex: "3:A",
        heroStats: [
            "operatorpvp_black_mirror_gadget_deployed",
            "operatorpve_black_mirror_gadget_deployed"
        ]
    },
    "ying-sat": {
        id: "ying-sat",
        category: "atk",
        index: "2",
        ctuIndex: "B",
        fullIndex: "2:B",
        heroStats: [
            "operatorpvp_dazzler_gadget_detonate",
            "operatorpve_dazzler_gadget_detonate"
        ]
    },
    "lesion-sat": {
        id: "lesion-sat",
        category: "def",
        index: "3",
        ctuIndex: "B",
        fullIndex: "3:B",
        heroStats: [
            "operatorpvp_caltrop_enemy_affected",
            "operatorpve_caltrop_enemy_affected"
        ]
    },
    "ela-grom": {
        id: "ela-grom",
        category: "def",
        index: "2",
        ctuIndex: "C",
        fullIndex: "2:C",
        heroStats: [
            "operatorpvp_concussionmine_detonate",
            "operatorpve_concussionmine_detonate"
        ]
    },
    "zofia-grom": {
        id: "zofia-grom",
        category: "atk",
        index: "3",
        ctuIndex: "C",
        fullIndex: "3:C",
        heroStats: [
            "operatorpvp_concussiongrenade_detonate",
            "operatorpve_concussiongrenade_detonate"
        ]
    },
    "dokkaebi-707th-smb": {
        id: "dokkaebi-707th-smb",
        category: "atk",
        index: "2",
        ctuIndex: "D",
        fullIndex: "2:D",
        heroStats: [
            "operatorpvp_phoneshacked",
            "operatorpve_phoneshacked"
        ]
    },
    "vigil-707th-smb": {
        id: "vigil-707th-smb",
        category: "def",
        index: "3",
        ctuIndex: "D",
        fullIndex: "3:D",
        heroStats: [
            "operatorpvp_attackerdrone_diminishedrealitymode",
            "operatorpve_attackerdrone_diminishedrealitymode"
        ]
    },
    "lion-gign": {
        id: "lion-cbrn",
        category: "atk",
        index: "2",
        ctuIndex: "E",
        fullIndex: "2:E",
        heroStats: [
            "operatorpvp_tagger_tagdevice_spot",
            "operatorpve_tagger_tagdevice_spot"
        ]
    },
    "finka-spetsnaz": {
        id: "finka-cbrn",
        category: "atk",
        index: "3",
        ctuIndex: "E",
        fullIndex: "3:E",
        heroStats: [
            "operatorpvp_rush_adrenalinerush",
            "operatorpve_rush_adrenalinerush"
        ]
    },
    "maestro-gis": {
        id: "maestro-gis",
        category: "def",
        index: "2",
        ctuIndex: "F",
        fullIndex: "2:F",
        heroStats: [
            "operatorpvp_barrage_killswithturret",
            "operatorpve_barrage_killswithturret"
        ]
    },
    "alibi-gis": {
        id: "alibi-gis",
        category: "def",
        index: "3",
        ctuIndex: "F",
        fullIndex: "3:F",
        heroStats: [
            "operatorpvp_deceiver_revealedattackers",
            "operatorpve_deceiver_revealedattackers"
        ]
    },
    "maverick-gsutr": {
        id: "maverick-gsutr",
        category: "atk",
        index: "2",
        ctuIndex: "10",
        fullIndex: "2:10",
        heroStats: [
            "operatorpvp_maverick_wallbreached",
            "operatorpve_maverick_wallbreached"
        ]
    },
    "clash-gsutr": {
        id: "clash-gsutr",
        category: "def",
        index: "3",
        ctuIndex: "10",
        fullIndex: "3:10",
        heroStats: [
            "operatorpvp_clash_sloweddown",
            "operatorpve_clash_sloweddown"
        ]
    },
    "nomad-gigr": {
        id: "nomad-gigr",
        category: "atk",
        index: "2",
        ctuIndex: "11",
        fullIndex: "2:11",
        heroStats: [
            "operatorpvp_Nomad_Assist",
            "operatorpve_Nomad_Assist"
        ]
    },
    "kaid-gigr": {
        id: "nomad-gigr",
        category: "def",
        index: "3",
        ctuIndex: "11",
        fullIndex: "3:11",
        heroStats: [
            "operatorpvp_Kaid_Electroclaw_Hatches",
            "operatorpve_Kaid_Electroclaw_Hatches"
        ]
    },
};

_.forEach(operators, function(value, key) {
    let operatorName = key.split('-')[0];
    exports[operatorName] = {
        index: value.fullIndex,
        heroStats: value.heroStats
    };
});
