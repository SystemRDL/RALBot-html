var RALIndex = [{"parent":null,"children":[1,2,3],"name":"turbo_encab","offset":bigInt('0',16),"size":bigInt('2800',16)},{"parent":0,"children":[],"name":"ctrl","offset":bigInt('0',16),"size":bigInt('4',16),"fields":[{"name":"reset","lsb":0,"msb":0,"reset":bigInt('0',16),"disp":"H"},{"name":"reluctance","lsb":1,"msb":8,"reset":bigInt('42',16),"disp":"H"},{"name":"diractance","lsb":9,"msb":16,"reset":bigInt('7b',16),"disp":"H"}]},{"parent":0,"children":[],"name":"status","offset":bigInt('4',16),"size":bigInt('4',16),"fields":[{"name":"side_fumbling","lsb":0,"msb":11,"reset":bigInt('0',16),"disp":"H"},{"name":"stator_rpm","lsb":16,"msb":31,"reset":bigInt('0',16),"disp":"H"}]},{"parent":0,"children":[4,5,6],"name":"grammeter","offset":bigInt('1000',16),"size":bigInt('c',16),"dims":[12],"stride":bigInt('200',16),"idxs":[0]},{"parent":3,"children":[],"name":"control","offset":bigInt('0',16),"size":bigInt('4',16),"fields":[{"name":"sync_en","lsb":0,"msb":0,"reset":bigInt('0',16),"disp":"H"},{"name":"disable","lsb":1,"msb":1,"reset":bigInt('0',16),"disp":"H"}]},{"parent":3,"children":[],"name":"status","offset":bigInt('4',16),"size":bigInt('4',16),"fields":[{"name":"state","lsb":0,"msb":2,"reset":bigInt('0',16),"disp":"H","encode":{"RESET":bigInt('0',16),"SYNC":bigInt('1',16),"READY":bigInt('2',16),"SYNC_FAIL":bigInt('3',16)}},{"name":"sync_failed","lsb":3,"msb":3,"reset":bigInt('0',16),"disp":"H"}]},{"parent":3,"children":[],"name":"meter","offset":bigInt('8',16),"size":bigInt('4',16),"fields":[{"name":"value","lsb":0,"msb":31,"reset":bigInt('0',16),"disp":"H"}]}];var PageInfo = {"title":"Turbo-Encabulator Reference"};