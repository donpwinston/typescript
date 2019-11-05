"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var ListItem = /** @class */ (function () {
    function ListItem(data) {
        this.data = data;
        this.next = null;
    }
    return ListItem;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        var item = new ListItem(data);
        if (!this.head) {
            this.head = item;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = item;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var length = 1;
            var item = this.head;
            while (item.next) {
                length++;
                item = item.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head)
            throw new Error("Index out of bounds");
        var counter = 0;
        var item = this.head;
        while (item) {
            if (counter === index)
                return item;
            counter++;
            item = item.next;
        }
        throw new Error("Index out of bounds");
    };
    LinkedList.prototype.compare = function (a, b) {
        if (!this.head)
            throw new Error("List is empty");
        return this.at(a).data > this.at(b).data;
    };
    LinkedList.prototype.swap = function (a, b) {
        var xItem = this.at(a);
        var yItem = this.at(b);
        var z = xItem.data;
        xItem.data = yItem.data;
        yItem.data = z;
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var item = this.head;
        while (item) {
            console.log(item.data);
            item = item.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
