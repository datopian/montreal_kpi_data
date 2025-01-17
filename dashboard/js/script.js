var config = {
  "widgets": [
    {
      "elementId": "air-quality",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "air-quality",
            "name": "monthly-averages",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 195,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "monthly-averages",
              "format": {
                "parse": {
                  "Month": "date"
                }
              }
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "monthly-averages",
                "field": "Month"
              }
            },
            {
              "name": "roadside",
              "type": "linear",
              "range": "height",
              "zero": false,
              "domain": {
                "data": "monthly-averages",
                "field": "[London Mean Roadside PM2.5 Particulate (ug/m3)]"
              }
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "format": "%Y",
              "domain": false,
              "ticks": false,
              "labelPadding": 10,
              "labelBound": true,
              "labelOverlap": true,
              "labelFontSize": 9
            },
            {
              "orient": "right",
              "scale": "roadside",
              "labelFont": "Lato",
              "domain": false,
              "ticks": false,
              "labelFontSize": 9
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "monthly-averages"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "field": "[London Mean Roadside PM2.5 Particulate (ug/m3)]"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "monthly-averages"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 11
                  },
                  "strokeWidth": {
                    "value": 1
                  },
                  "stroke": {
                    "value": "gray"
                  },
                  "strokeDash": {
                    "value": [
                      5,
                      5
                    ]
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "monthly-averages"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 23
                  },
                  "strokeWidth": {
                    "value": 1
                  },
                  "stroke": {
                    "value": "gray"
                  },
                  "strokeDash": {
                    "value": [
                      5,
                      5
                    ]
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "monthly-averages"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 35
                  },
                  "strokeWidth": {
                    "value": 1
                  },
                  "stroke": {
                    "value": "gray"
                  },
                  "strokeDash": {
                    "value": [
                      5,
                      5
                    ]
                  }
                }
              }
            },
            {
              "type": "text",
              "encode": {
                "enter": {
                  "fill": {
                    "value": "gray"
                  },
                  "zindex": {
                    "value": 10
                  },
                  "text": {
                    "value": "Low (index 1)"
                  },
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 11
                  },
                  "dx": {
                    "value": -55
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontSize": {
                    "value": 9
                  }
                }
              }
            },
            {
              "type": "text",
              "encode": {
                "enter": {
                  "fill": {
                    "value": "gray"
                  },
                  "zindex": {
                    "value": 10
                  },
                  "text": {
                    "value": "Low (index 2)"
                  },
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 23
                  },
                  "dx": {
                    "value": -55
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontSize": {
                    "value": 9
                  }
                }
              }
            },
            {
              "type": "text",
              "encode": {
                "enter": {
                  "fill": {
                    "value": "gray"
                  },
                  "zindex": {
                    "value": 10
                  },
                  "text": {
                    "value": "Low (index 3): Enjoy your usual outdoor activities up to this level."
                  },
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 35.5
                  },
                  "dx": {
                    "value": -55
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontSize": {
                    "value": 9
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "elementId": "publicTransit",
      "view": {
        "title": "XXXXXXX Rides",
        "legend": "XXXXXXXX Total rides",
        "resources": [
          {
            "datasetId": "montreal-kpis",
            "name": "trips",
            "transform": [
              {
                "type": "aggregate",
                "fields": [
                  "Valeur"
                ],
                "operations": [
                  "argmax"
                ]
              }
            ]
          }
        ],
        "specType": "figure",
        "spec": {
          "fieldName": "Valeur"
        }
      }
    }
  ],
  "datasets": [
    "https://datahub.io/london/air-quality",
    "https://datahub.io/starsinmypockets/montreal-kpis"
  ]
}