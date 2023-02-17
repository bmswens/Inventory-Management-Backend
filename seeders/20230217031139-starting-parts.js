'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Parts',
      [
        {
          "name": "SPRING, RIVET GUN FLUSH SET(NOT ETCHED)(REPLACEMENT)",
          "unit": "Each",
          "quantity": "11",
          "bin": "LYER140101"
        },
        {
          "name": "SPRING, RIVET GUN, BUTTON HEAD SET(NOT ETCHED)(REPLACEMENT)",
          "unit": "Each",
          "quantity": "19",
          "bin": "LYER140102"
        },
        {
          "name": "PUNCH, KNOCK OUT, 5/32",
          "unit": "Each",
          "quantity": "20",
          "bin": "LYER140103"
        },
        {
          "name": "RIVET SET, 3/32 (BH)(REPLACEMENT)",
          "unit": "Each",
          "quantity": "2",
          "bin": "LYER140104"
        },
        {
          "name": "RIVET SET 1\" FLUSH(REPLACEMENT)",
          "unit": "Each",
          "quantity": "1",
          "bin": "LYER140105"
        },
        {
          "name": "RVET SET, 5/32(BH)(REPLACEMENT)",
          "unit": "Each",
          "quantity": "4",
          "bin": "LYER140106"
        },
        {
          "name": "ARBOR, SANDING 1\" W SHAFT(REPLACEMENT)",
          "unit": "Each",
          "quantity": "16",
          "bin": "LYER140107"
        },
        {
          "name": "HI-SPEED ADAPTER(2 PCS)(REPLACEMENT)",
          "unit": "Each",
          "quantity": "18",
          "bin": "LYER140108"
        },
        {
          "name": "PUNCH, KNOCK-OUT, 1/8\"",
          "unit": "Each",
          "quantity": "19",
          "bin": "LYER140109"
        },
        {
          "name": "PUNCH, KNOCK-OUT 3/32\"(REPLACEMENT)",
          "unit": "Each",
          "quantity": "8",
          "bin": "LYER140110"
        },
        {
          "name": "ARBOR, SANDING 1\"(REPLACEMENT)",
          "unit": "Each",
          "quantity": "8",
          "bin": "LYER140111"
        },
        {
          "name": "ARBOR, SHAFT(REPLACEMENT)",
          "unit": "Each",
          "quantity": "8",
          "bin": "LYER140112"
        },
        {
          "name": "ROTARY FILE, CONE 1/8\" SHANK",
          "unit": "Each",
          "quantity": "10",
          "bin": "LYER140113"
        },
        {
          "name": "DENTAL BUR, BALL 3/64\"",
          "unit": "Each",
          "quantity": "21",
          "bin": "LYER140114"
        },
        {
          "name": "ROTARY FILE, ROUNDED TREE SHAPE 3/8\" X 3/4\"",
          "unit": "Each",
          "quantity": "27",
          "bin": "LYER140115"
        },
        {
          "name": "ROTARY FILE, BALL 1/4\",1/8\"",
          "unit": "Each",
          "quantity": "20",
          "bin": "LYER140116"
        },
        {
          "name": "Rivet Set, 1/8\"  (BH) (Replacement)",
          "unit": "Each",
          "quantity": "13",
          "bin": "LYER140117"
        },
        {
          "name": "Rivet Set, Flush 1/2\" (Replacement)",
          "unit": "Each",
          "quantity": "2",
          "bin": "LYER140118"
        },
        {
          "name": "Rivet Set, 3/16\" (BH) (Replacement)",
          "unit": "Each",
          "quantity": "3",
          "bin": "LYER140119"
        },
        {
          "name": "Chuck key, 3/16\" (Replacement)",
          "unit": "Each",
          "quantity": "7",
          "bin": "LYER140120"
        },
        {
          "name": "File, Rotary, Ball, 1/2\" (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "20",
          "bin": "LYER140121"
        },
        {
          "name": "Punch, Pin 1/16\" (Replacement)",
          "unit": "Each",
          "quantity": "93",
          "bin": "LYER140122"
        },
        {
          "name": "File, Rotary, Cone, 1/4\" Single Cut (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "22",
          "bin": "LYER140123"
        },
        {
          "name": "Carbide Burr Set",
          "unit": "Each",
          "quantity": "1",
          "bin": "LYER140124"
        },
        {
          "name": "Key, Chuck 1/2 (Replacement)",
          "unit": "Each",
          "quantity": "4",
          "bin": "LYER140125"
        },
        {
          "name": "Ratchet, Palm, 1/4\" Drive (Replacement)",
          "unit": "Each",
          "quantity": "1",
          "bin": "LYER140126"
        },
        {
          "name": "Punch Holder (3 pcs ea)",
          "unit": "Each",
          "quantity": "5",
          "bin": "LYER140127"
        },
        {
          "name": "File, Rotary, Cylinder Ball Nose, 1/4\" (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "14",
          "bin": "LYER140128"
        },
        {
          "name": "File, Rotary, Ball, 3/8\"\" (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "48",
          "bin": "LYER140129"
        },
        {
          "name": "Punch, Knock-Out, 3/16\" (Replacement)",
          "unit": "Each",
          "quantity": "18",
          "bin": "LYER140130"
        },
        {
          "name": "Punch, Knock-Out 1/4\" (Replacement)",
          "unit": "Each",
          "quantity": "6",
          "bin": "LYER140131"
        },
        {
          "name": "File, Rotary, Pointed Cone 3/8\" (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "14",
          "bin": "LYER140132"
        },
        {
          "name": "File, Rotary, Cylinder Rounded 1/2\" (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "15",
          "bin": "LYER140133"
        },
        {
          "name": "File, Rotary, Ball, 3/32\" (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "0",
          "bin": "LYER140134"
        },
        {
          "name": "File, Rotary, Barrel, 1/2\" Single Cut Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "24",
          "bin": "LYER140135"
        },
        {
          "name": "Dental Burr, Ball 1/8\" (Replacement)",
          "unit": "Each",
          "quantity": "8",
          "bin": "LYER140136"
        },
        {
          "name": "Dental Burr, Ball 5/64\" (Replacement)",
          "unit": "Each",
          "quantity": "77",
          "bin": "LYER140137"
        },
        {
          "name": "Dental Burr, Ball 1/16\" (Replacement)",
          "unit": "Each",
          "quantity": "83",
          "bin": "LYER140138"
        },
        {
          "name": "File, Rotary, Tree, 1/4\" (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "0",
          "bin": "LYER140139"
        },
        {
          "name": "File, Rotary, Rounded Tree, 1\" (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "0",
          "bin": "LYER140140"
        },
        {
          "name": "File, Rotary, Tree Inverted (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "18",
          "bin": "LYER140141"
        },
        {
          "name": "File, Rotary, Cylinder, 7/16\" (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "1",
          "bin": "LYER140142"
        },
        {
          "name": "5/16 Rottary Ball File Double Edge",
          "unit": "Each",
          "quantity": "70",
          "bin": "LYER140144"
        },
        {
          "name": "Permaswage Marking Tool 3/16-3/8",
          "unit": "",
          "quantity": "5",
          "bin": "LYER140145"
        },
        {
          "name": "Permaswage Marking Tool 1/2-7/8",
          "unit": "",
          "quantity": "3",
          "bin": "LYER140146"
        },
        {
          "name": "File, Rotary, Ball, 3/16\", 1/8\" Shank (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "3",
          "bin": "LYER140147"
        },
        {
          "name": "CARBIDE BURR DOUBLE CUT BALL SHAPE 1/8\"",
          "unit": "Each",
          "quantity": "60",
          "bin": "LYER140148"
        },
        {
          "name": "100 Degree Counter Sink Kit",
          "unit": "Each",
          "quantity": "2",
          "bin": "LYER140149"
        },
        {
          "name": "Batteries 3v",
          "unit": "Each",
          "quantity": "19",
          "bin": "LYER140150"
        },
        {
          "name": "Mirror, Inspection Lighted",
          "unit": "Each",
          "quantity": "1",
          "bin": "LYER140151"
        },
        {
          "name": "Huck Gauge, (2 Pcs) (Replacement)",
          "unit": "Each",
          "quantity": "23",
          "bin": "LYER140152"
        },
        {
          "name": "Air Blower",
          "unit": "Each",
          "quantity": "0",
          "bin": "LYER140153"
        },
        {
          "name": "Screwdriver, Common, 2\"",
          "unit": "Each",
          "quantity": "10",
          "bin": "LYER140154"
        },
        {
          "name": "Micrometer Optical LED Flashlight",
          "unit": "Each",
          "quantity": "1",
          "bin": "LYER140155"
        },
        {
          "name": "Screwdriver, Phillips, #2, 2\"",
          "unit": "Each",
          "quantity": "6",
          "bin": "LYER140156"
        },
        {
          "name": "Screwdriver, Common, 3\"",
          "unit": "Each",
          "quantity": "5",
          "bin": "LYER140157"
        },
        {
          "name": "Screwdriver, Phillips, #2, 4\"",
          "unit": "Each",
          "quantity": "5",
          "bin": "LYER140158"
        },
        {
          "name": "Screwdriver, Phillips, #1 3\"",
          "unit": "Each",
          "quantity": "4",
          "bin": "LYER140159"
        },
        {
          "name": "Bulb, Explosion Proof Flashlight (Replacement)",
          "unit": "Each",
          "quantity": "8",
          "bin": "LYER140160"
        },
        {
          "name": "Bulb, Mag Lite 3 Cell (Replacement)",
          "unit": "Each",
          "quantity": "2",
          "bin": "LYER140161"
        },
        {
          "name": "Bulb, Mag Lite 2 Cell (Replacement)",
          "unit": "Each",
          "quantity": "4",
          "bin": "LYER140162"
        },
        {
          "name": "Bulb, Dewalt Flashlight (Replacement)",
          "unit": "Each",
          "quantity": "27",
          "bin": "LYER140163"
        },
        {
          "name": "Pliers, Needle Nose, Angled (Short)",
          "unit": "Each",
          "quantity": "4",
          "bin": "LYER140164"
        },
        {
          "name": "Pliers, Needle Nose, (Skinny)",
          "unit": "Each",
          "quantity": "2",
          "bin": "LYER140165"
        },
        {
          "name": "Flashlight, Small",
          "unit": "Each",
          "quantity": "4",
          "bin": "LYER140166"
        },
        {
          "name": "Socket, Allen, 5/64\" (Replacement)",
          "unit": "Each",
          "quantity": "2",
          "bin": "LYER140167"
        },
        {
          "name": "Socket, Allen, Replacement Key, 5/64\" (Replacement)",
          "unit": "Each",
          "quantity": "17",
          "bin": "LYER140168"
        },
        {
          "name": "Socket, Allen, 3/32\" Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "3",
          "bin": "LYER140169"
        },
        {
          "name": "Socket, Allen, Replacement Key, 3/32\" (Replacement)",
          "unit": "Each",
          "quantity": "5",
          "bin": "LYER140170"
        },
        {
          "name": "Socket, Allen, 1/16\" (Replacement)",
          "unit": "Each",
          "quantity": "1",
          "bin": "LYER140171"
        },
        {
          "name": "Socket, Allen, Replacement Key, 1/16 (Replacement)",
          "unit": "Each",
          "quantity": "17",
          "bin": "LYER140172"
        },
        {
          "name": "Wrench, Allen  3/32\" Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "41",
          "bin": "LYER140173"
        },
        {
          "name": "Wrench, Allen  9/64\" Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "7",
          "bin": "LYER140174"
        },
        {
          "name": "Wrench, Allen 12mm Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "2",
          "bin": "LYER140175"
        },
        {
          "name": "Wrench, Allen  5/16\" Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "2",
          "bin": "LYER140176"
        },
        {
          "name": "Adapter, Apex, 3/8\" Drive (Replacement)",
          "unit": "Each",
          "quantity": "10",
          "bin": "LYER140177"
        },
        {
          "name": "Wrench, Allen, 1/8\" Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "190",
          "bin": "LYER140178"
        },
        {
          "name": "Wrench, Allen  3/16\" Not Etched (Replacement),LYER140179",
          "unit": "Each",
          "quantity": "18",
          "bin": "LYER140179"
        },
        {
          "name": "Wrench, Allen  1/4\" Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "2",
          "bin": "LYER140180"
        },
        {
          "name": "Awl",
          "unit": "Each",
          "quantity": "4",
          "bin": "LYER140181"
        },
        {
          "name": "Wrench, Allen  1/16\" Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "1",
          "bin": "LYER140182"
        },
        {
          "name": "Adapter, Apex, 1/4\" Drive (Replacement)",
          "unit": "Each",
          "quantity": "4",
          "bin": "LYER140183"
        },
        {
          "name": "Scale, 6\"",
          "unit": "Each",
          "quantity": "16",
          "bin": "LYER140184"
        },
        {
          "name": "Countersink Adapter (Replacement)",
          "unit": "Each",
          "quantity": "6",
          "bin": "LYER140185"
        },
        {
          "name": "Countersink, Universal Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "16",
          "bin": "LYER140186"
        },
        {
          "name": "Battery, Caliper (Replacement)",
          "unit": "Each",
          "quantity": "9",
          "bin": "LYER140187"
        },
        {
          "name": "Dead Blow Mallet Face (brown, soft)",
          "unit": "Each",
          "quantity": "8",
          "bin": "LYER140188"
        },
        {
          "name": "Dead Blow Mallet Face (black, hard)",
          "unit": "Each",
          "quantity": "8",
          "bin": "LYER140189"
        },
        {
          "name": "Volt Meter+ 3 EA WIRES+BAG = 5PCS TOTAL",
          "unit": "Each",
          "quantity": "1",
          "bin": "LYER140190"
        },
        {
          "name": "Digital Thermometer w/ Support (2pcs) (Replacement)",
          "unit": "Each",
          "quantity": "0",
          "bin": "LYER140191"
        },
        {
          "name": "Arbor, Sanding 2\" (Replacement)",
          "unit": "Each",
          "quantity": "10",
          "bin": "LYER140192"
        },
        {
          "name": "vac guage",
          "unit": "",
          "quantity": "1",
          "bin": "LYER140193"
        },
        {
          "name": "Vacuum, Base (Replacement)",
          "unit": "Each",
          "quantity": "6",
          "bin": "LYER140194"
        },
        {
          "name": "5/64 Allen Wrench (Replacement) (Eddie Bolt Tool)",
          "unit": "Each",
          "quantity": "7",
          "bin": "LYER140195"
        },
        {
          "name": "Terry Bit, Stubby, #21 (Replacement)",
          "unit": "Each",
          "quantity": "88",
          "bin": "LYER140196"
        },
        {
          "name": "Terry Bit, Short, 1/4\" (Replacement)",
          "unit": "Each",
          "quantity": "17",
          "bin": "LYER140197"
        },
        {
          "name": "Terry Bit, Stubby, #40 (Replacement)",
          "unit": "Each",
          "quantity": "83",
          "bin": "LYER140198"
        },
        {
          "name": "Terry Bit, Stubby, #30 (Replacement)",
          "unit": "Each",
          "quantity": "52",
          "bin": "LYER140199"
        },
        {
          "name": "Terry Bit, Stubby, #21, Short (Replacement)",
          "unit": "Each",
          "quantity": "21",
          "bin": "LYER140200"
        },
        {
          "name": "Terry Bit, Stubby, #10 (Replacement)",
          "unit": "Each",
          "quantity": "12",
          "bin": "LYER140201"
        },
        {
          "name": "Small combo head, 45/90 W/scribe removed",
          "unit": "Each",
          "quantity": "1",
          "bin": "LYER140305"
        },
        {
          "name": "eddie bolt tool 130-312",
          "unit": "Each",
          "quantity": "1",
          "bin": "LYER140306"
        },
        {
          "name": "TERRY BIT #40",
          "unit": "Each",
          "quantity": "0",
          "bin": "LYER140307"
        },
        {
          "name": "TERRY BIT #30",
          "unit": "Each",
          "quantity": "16",
          "bin": "LYER140308"
        },
        {
          "name": "TERRY BIT #21",
          "unit": "Each",
          "quantity": "5",
          "bin": "LYER140309"
        },
        {
          "name": "TERRY BIT #10",
          "unit": "Each",
          "quantity": "32",
          "bin": "LYER140310"
        },
        {
          "name": "TERRY BIT # 1/4\"",
          "unit": "Each",
          "quantity": "44",
          "bin": "LYER140311"
        },
        {
          "name": "EASY OUT 1/8\" STUB",
          "unit": "Each",
          "quantity": "0",
          "bin": "LYER140323"
        },
        {
          "name": "EASY OUT, 7/32\" SNAP ON",
          "unit": "Each",
          "quantity": "15",
          "bin": "LYER140324"
        },
        {
          "name": "EASY OUT, STUB 3/8\"",
          "unit": "Each",
          "quantity": "16",
          "bin": "LYER140325"
        },
        {
          "name": "EASY OUT 3/16\" SNAP ON",
          "unit": "Each",
          "quantity": "9",
          "bin": "LYER140326"
        },
        {
          "name": "EASY OUT #1",
          "unit": "Each",
          "quantity": "16",
          "bin": "LYER140327"
        },
        {
          "name": "EASY OUT, STUB 9/32\"",
          "unit": "Each",
          "quantity": "20",
          "bin": "LYER140328"
        },
        {
          "name": "EASY OUT 5/32 STUB",
          "unit": "Each",
          "quantity": "0",
          "bin": "LYER140329"
        },
        {
          "name": "EASY OUT 1/4\" SNAP ON",
          "unit": "Each",
          "quantity": "16",
          "bin": "LYER140330"
        },
        {
          "name": "EASY OUT # 2",
          "unit": "Each",
          "quantity": "21",
          "bin": "LYER140331"
        },
        {
          "name": "EASY OUT STUB, 5/16\"",
          "unit": "Each",
          "quantity": "13",
          "bin": "LYER140332"
        },
        {
          "name": "EASY OUT #5",
          "unit": "Each",
          "quantity": "14",
          "bin": "LYER140333"
        },
        {
          "name": "EASY OUT #4",
          "unit": "Each",
          "quantity": "13",
          "bin": "LYER140334"
        },
        {
          "name": "EASY OUT # 3",
          "unit": "Each",
          "quantity": "28",
          "bin": "LYER140335"
        },
        {
          "name": "CHUCK KEY, 3/8\"(REPLACEMENT)",
          "unit": "Each",
          "quantity": "5",
          "bin": "LYER140336"
        },
        {
          "name": "EASY OUT, STUBBY, 11/32\"(NOT ETCHED)",
          "unit": "Each",
          "quantity": "12",
          "bin": "LYER140337"
        },
        {
          "name": "FILE, ROTARY, TREE, 1/2\" (NOT ETCHED)(REPLACEMENT)",
          "unit": "Each",
          "quantity": "5",
          "bin": "LYER140338"
        },
        {
          "name": "7/32 LONG PUNCH",
          "unit": "Each",
          "quantity": "2",
          "bin": "LYER140339"
        },
        {
          "name": "3/32\" MODIFIED PUNCH MXG-221 LOCAL MAN",
          "unit": "Each",
          "quantity": "10",
          "bin": "LYER140340"
        },
        {
          "name": "Terry Bit, Stubby, #40, Short (Replacement)",
          "unit": "Each",
          "quantity": "0",
          "bin": "LYER140400"
        },
        {
          "name": "Terry Bit, Stubby, #30, Short (Replacement)",
          "unit": "Each",
          "quantity": "18",
          "bin": "LYER140401"
        },
        {
          "name": "Terry Bit, Stubby, #5 (Short)/(Replacement)",
          "unit": "Each",
          "quantity": "53",
          "bin": "LYER140402"
        },
        {
          "name": "Terry Bit, Stubby, #8 (Replacement)",
          "unit": "Each",
          "quantity": "52",
          "bin": "LYER140403"
        },
        {
          "name": "Terry Bit, #8 Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "15",
          "bin": "LYER140404"
        },
        {
          "name": "Terry Bit, Stubby, #16 (Short)/(Replacement)",
          "unit": "Each",
          "quantity": "38",
          "bin": "LYER140405"
        },
        {
          "name": "Apex, 3/8\" Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "17",
          "bin": "LYER140406"
        },
        {
          "name": "Terry Bit, Stubby, #11 (Replacement)",
          "unit": "Each",
          "quantity": "20",
          "bin": "LYER140407"
        },
        {
          "name": "Terry Bit, #13 Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "0",
          "bin": "LYER140408"
        },
        {
          "name": "Terry Bit, #5 Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "14",
          "bin": "LYER140409"
        },
        {
          "name": "Terry Bit, #12 Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "15",
          "bin": "LYER140410"
        },
        {
          "name": "Terry Bit, Stubby, #27 (Replacement)",
          "unit": "Each",
          "quantity": "46",
          "bin": "LYER140411"
        },
        {
          "name": "Terry Bit, #7 (Not Etched)",
          "unit": "Each",
          "quantity": "15",
          "bin": "LYER140412"
        },
        {
          "name": "Terry Bit, #16 Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "3",
          "bin": "LYER140413"
        },
        {
          "name": "Terry Bit, #19 Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "15",
          "bin": "LYER140414"
        },
        {
          "name": "Terry Bit, #27 Not Etched (Replacement)",
          "unit": "Each",
          "quantity": "46",
          "bin": "LYER140415"
        },
        {
          "name": "Countersink, 100\u00b0 #40 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "49",
          "bin": "LYER140416"
        },
        {
          "name": "Countersink, 1/2, 100\u00b0 #30 (Not Etched) (Replacement),LYER140417",
          "unit": "Each",
          "quantity": "5",
          "bin": "LYER140417"
        },
        {
          "name": "Countersink, 7/16, 100\u00b0 #30 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "14",
          "bin": "LYER140418"
        },
        {
          "name": "Countersink, 100\u00b0 #10 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "9",
          "bin": "LYER140419"
        },
        {
          "name": "Countersink, 4,  100\u00b0 1/4\" (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "8",
          "bin": "LYER140420"
        },
        {
          "name": "Countersink, 7/16, 100\u00b0 #27 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "23",
          "bin": "LYER140421"
        },
        {
          "name": "Countersink, 1/2, 100\u00b0 #19 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "22",
          "bin": "LYER140422"
        },
        {
          "name": "Countersink, 100\u00b0 #13 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "18",
          "bin": "LYER140423"
        },
        {
          "name": "Countersink, 100\u00b0 #8 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "38",
          "bin": "LYER140424"
        },
        {
          "name": "Countersink, 82\u00b0, #40 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "43",
          "bin": "LYER140425"
        },
        {
          "name": "Countersink, 82\u00b0 #21 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "50",
          "bin": "LYER140426"
        },
        {
          "name": "Countersink, 82\u00b0 #10 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "53",
          "bin": "LYER140427"
        },
        {
          "name": "Countersink, 82\u00b0, 1/4\" (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "6",
          "bin": "LYER140428"
        },
        {
          "name": "Countersink, 82\u00b0 #30 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "9",
          "bin": "LYER140429"
        },
        {
          "name": "Countersink, Reverse, #40 (Replacement)",
          "unit": "",
          "quantity": "2",
          "bin": "LYER140430"
        },
        {
          "name": "Countersink, Reverse, #10 (Replacement)",
          "unit": "Each",
          "quantity": "3",
          "bin": "LYER140431"
        },
        {
          "name": "Countersink, Reverse, #30 (Replacement)",
          "unit": "Each",
          "quantity": "3",
          "bin": "LYER140432"
        },
        {
          "name": "Countersink, Reverse, #21 (Replacement)",
          "unit": "Each",
          "quantity": "3",
          "bin": "LYER140433"
        },
        {
          "name": "Terry Bit 1/4 Stubby (Replacement)",
          "unit": "Each",
          "quantity": "39",
          "bin": "LYER140434"
        },
        {
          "name": "3\"X4\" ORBITAL SANDER, JHOOK VAC, REPLACEMENT PADS",
          "unit": "Each",
          "quantity": "4",
          "bin": "LYER140435"
        },
        {
          "name": "3\"X4\" ORBITAL SANDER, JHOOK VAC\n3/16 10K",
          "unit": "Each",
          "quantity": "2",
          "bin": "LYER140436"
        },
        {
          "name": "Countersink, 5/8, 100 1/4 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "20",
          "bin": "LYER140437"
        },
        {
          "name": "Countersink, 1/2, 100 5/32 (Not Etched) (Replacement)",
          "unit": "",
          "quantity": "36",
          "bin": "LYER140438"
        },
        {
          "name": "Countersink, 1/2, 100 1/4 (Not Etched) (Replacement)",
          "unit": "",
          "quantity": "12",
          "bin": "LYER140439"
        },
        {
          "name": "Countersink, 5/16, 100 #30 (Not Etched) (Replacement)",
          "unit": "",
          "quantity": "6",
          "bin": "LYER140440"
        },
        {
          "name": "Countersink, 3/8, 100 #30 (Not Etched) (Replacement)",
          "unit": "Each",
          "quantity": "20",
          "bin": "LYER140441"
        },
        {
          "name": "Countersink, 5/8, 100 #30 (Not Etched) (Replacement",
          "unit": "Each",
          "quantity": "19",
          "bin": "LYER140442"
        },
        {
          "name": "#13 X 30 COBALT BIT",
          "unit": "",
          "quantity": "0",
          "bin": "LYER140701"
        },
        {
          "name": "#21 X 30 COBALT BIT",
          "unit": "",
          "quantity": "0",
          "bin": "LYER140702"
        },
        {
          "name": "#40 COBALT BIT",
          "unit": "",
          "quantity": "7",
          "bin": "LYER140703"
        },
        {
          "name": "1/4\" COBALT BIT",
          "unit": "",
          "quantity": "82",
          "bin": "LYER140704"
        },
        {
          "name": "#27 COBALT BIT",
          "unit": "",
          "quantity": "56",
          "bin": "LYER140705"
        },
        {
          "name": "#30 COBALT BIT",
          "unit": "",
          "quantity": "20",
          "bin": "LYER140706"
        },
        {
          "name": "#21 COBALT BIT",
          "unit": "Each",
          "quantity": "175",
          "bin": "LYER140707"
        },
        {
          "name": "#10 COBALT BIT",
          "unit": "",
          "quantity": "272",
          "bin": "LYER140708"
        },
        {
          "name": "PROTRACTOR, 180",
          "unit": "",
          "quantity": "5",
          "bin": "LYER140709"
        }
      ]
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Parts', null, {});
  }
};
