	var data = [
	{
		 "id": 0,
	    "dirName": "Simpson",
	    "url": "http://google.com",
	    "childs": [],
	},
  	{
	    "id": 1,
	    "dirName": "Swanson",
	    "url": "http://google.com",
	    "childs": [
	      {
	        "id": 0,
	        "url": "http://google.com",
	        "dirName": "n asfe avvdx asd asdf rwerq zzxcv cv aaxon",
	        "childs": []
	      },
	      {
	        "id": 1,
	        "url": "",
	        "dirName": "ipsum",
	        "childs": []
	      },
	      {
	        "id": 2,
	        "url": "",
	        "dirName": "sint",
	        "childs": []
	      },
	      {
	        "id": 3,
	        "url": "http://bing.com",
	        "dirName": "nostrud",
	        "childs": []
	      },
	      {
	        "id": 4,
	        "url": "",
	        "dirName": "labore",
	        "childs": [
					  {
				        "id": 0,
				        "url": "",
				        "dirName": "duis",
				        "childs": []
				      },
				      {
				        "id": 1,
				        "url": "http://google.com",
				        "dirName": "magna",
				        "childs": []
				      },
				      {
				        "id": 2,
				        "url": "http://yahoo.com",
				        "dirName": "irure",
				        "childs": [
								      {
								        "id": 0,
								        "url": "",
								        "dirName": "tempor",
								        "childs": []
								      },
								      {
								        "id": 1,
								        "url": "http://google.com",
								        "dirName": "nostrud",
								        "childs": [
									        	 {
											        "id": 1,
											        "url": "http://google.com",
											        "dirName": "duis",
											        "childs": []
											      },
											      {
											        "id": 2,
											        "url": "http://google.com",
											        "dirName": "elit",
											        "childs": []
											      },
											      {
											        "id": 3,
											        "url": "",
											        "dirName": "quis",
											        "childs": []
											      }
								        	]
								      },
								      {
								        "id": 2,
								        "url": "",
								        "dirName": "sit",
								        "childs": []
								      }
								]
				      },
				      {
				        "id": 3,
				        "url": "",
				        "dirName": "laboris",
				        "childs": []
				      },
				      {
				        "id": 4,
				        "url": "",
				        "dirName": "pariatur",
				        "childs": []
				      },
				      {
				        "id": 5,
				        "url": "",
				        "dirName": "proident",
				        "childs": []
			      }
			    ]
      },
      {
        "id": 5,
        "url": "",
        "dirName": "aliquip",
        "childs": []
      },
      {
        "id": 6,
        "url": "http://bing.com",
        "dirName": "mollit",
        "childs": []
      }
    ]
  },
  {
    "id": 2,
    "dirName": "Mcmahon",
    "url": "http://yahoo.com",
    "childs": [
      {
        "id": 0,
        "url": "",
        "dirName": "eu",
        "childs": []
      },
     
      {
        "id": 1,
        "url": "",
        "dirName": "ipsum",
        "childs": []
      },
      {
        "id": 2,
        "url": "",
        "dirName": "pariatur",
        "childs": []
      }
    ]
  },
  {
    "id": 3,
    "dirName": "Knox",
    "url": "http://bing.com",
    "childs": [
      {
        "id": 0,
        "url": "",
        "dirName": "consectetur",
        "childs": []
      },
      {
        "id": 1,
        "url": "",
        "dirName": "ex",
        "childs": []
      },
      {
        "id": 2,
        "url": "",
        "dirName": "esse",
        "childs": []
      },
      {
        "id": 3,
        "url": "",
        "dirName": "enim",
        "childs": []
      }
    ]
  },
  {
    "id": 4,
    "dirName": "Luna",
    "url": "http://google.com",
    "childs": [
      {
        "id": 0,
        "url": "",
        "dirName": "esse",
        "childs": []
      }
    ]
  }
];


/*

http://www.json-generator.com/

['{{repeat(5, 7)}}',
  {
    id: '{{index()}}',

    dirName: '{{firstName()}}',
    
     url: function (tags) {
      var url = ['http://google.com', 'http://bing.com', 'http://yahoo.com'];
      return url[tags.integer(0, url.length - 1)];
    },

    childs: ['{{repeat(1,7)}}',
     {
      id: '{{index()}}',
       url: function (tags) {
      var url = ['http://google.com', 'http://bing.com', 'http://yahoo.com'];
      return url[tags.integer(0, url.length - 1)];
    },
      dirName: '{{lorem(1, "words")}}',
           childs:[]
    }
         
            
   ]
  
  }
  
]


*/