## MRVN node module

Send custom POST requests to MRVN

### usage

This module sends custom POST requests to MRVN's webhooks. Make sure to sign up and add a ``custom`` webhook to your dashboard.

```
const mrvn = require("mrvn")

mrvn.post({ name: "My Website", message: "Some custom event"}, "b76aac94-3b0b-11eb-adc1-0242ac120002")
```

``mrvn.post()`` takes two parameters, a ``data`` and an ``endpoint``. Data can currently contain a ``name`` and a ``message`` property. 
