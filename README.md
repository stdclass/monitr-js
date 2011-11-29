Monitr.io – Javascript Client Library
===


How To Use
---

**Setup:**

    Monitr.setup({
        "apiKey": "...",
        "domain": "..."
    });


Other Setup Options:

* `defaultErrorCode` – the default errorcode ( default: Monitr.ERROR_CODES.warning )
* `errorLevel` – All errors below this level won't get logged (Monitr.ERROR_CODES.warning is the default value).


**Log an error:**

    Monitr.log({
        "code": Monitr.ERROR_CODES.error,
        "message": "Something bad happened :("
    });



or

    Monitr.log("Something bad happened :(", Monitr.ERROR_CODES.error);
    
    Monitr.log("Another bad thing happened :S"); // default error code



Error Codes
---

    Monitr.ERROR_CODES.
        error
        warning
        parse
        notice
        deprecated

**Set Error level**

All errors below this level won't get logged (Monitr.ERROR_CODES.warning is the default value).

    Monitr.errorLevel( Monitr.ERROR_CODES.notice );
    
    var errorLevel = Monitr.errorLevel();



Author
---

Phillip Dornauer < phillip.dornauer@gmail.com > @phillipdornauer


Website
---

[http://monitr.io](Monitr.io)



